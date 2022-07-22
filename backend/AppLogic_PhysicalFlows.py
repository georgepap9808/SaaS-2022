import requests 
import pymongo
import pika 
from flask import Flask, request, jsonify
from threading import Thread


from user_service_client.client import authenticate
from flask import abort
############################################################################################################################################
# GET data and update the db

# Establish connection with database 
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["EnergyLive2022"]
collection = db["PhysicalFlows"]

# Establish messaging connection, channel and queue
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue='PhysicalFlows', durable=True)

# GET data and update the db
# Function to be executed every time a message is received = the data microservice has uploaded new data 
def data_consume(ch, method, properties, body):
    #print("Received: "+ body.decode('utf-8'))

    # GET HTTP request
    base_url = "http://127.0.0.1:5050/"
    response = requests.get(base_url+"42_GET_Data_PhysicalFlows")  
    json_data = response.json()
    #print(json_data)
    print("# Data rows:", len(json_data))

    # Update the db
    #collection.delete_many({})
    collection.delete_many({"DateTime": {"$gte": body.decode('utf-8')+"-00 00:00:00.000"}}) # Delete all data from the current month (json_data contains all data from start for the current month) 
    collection.insert_many(json_data)
    print("Data have been inserted successfully...")

    # Send an ack back to the data microservice
    ch.basic_ack(delivery_tag = method.delivery_tag) 

# Consume messages
channel.basic_consume(queue='PhysicalFlows', on_message_callback=data_consume)
mq_thread = Thread(target = channel.start_consuming, daemon = True)
mq_thread.start()

############################################################################################################################################
# API for returning the requested data to the frontend 

app = Flask(__name__)

@app.route('/GET_PhysicalFlows', methods = ['GET'])
def index():

    email  = request.args.get('email')
    token  = request.args.get('token')
    auth = authenticate(email,token)

    if not auth: 
        abort(401)

    datetime = request.args.get('datetime')
    from_country = request.args.get('from_country')
    to_country = request.args.get('to_country')
    #print(type(datetime), datetime)
    
    results = []
    for doc in collection.find({"DateTime": {"$gte": datetime}, "FromCountry": from_country, "ToCountry": to_country}, {"_id": 0, "FromCountry": 0, "ToCountry": 0}):
        results.append(doc)
        
    #print(results)
    return jsonify(results)

app.run(port = 5000)
