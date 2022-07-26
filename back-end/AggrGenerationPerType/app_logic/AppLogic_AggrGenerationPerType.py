import requests 
import pymongo
import pika 
from flask import Flask, request, jsonify, abort
from threading import Thread
import time 
from flask_cors import CORS, cross_origin

time.sleep(180) # for docker compose to run in order and smoothly 

############################################################################################################################################
# GET data and update the db

# Establish connection with database 
#client = pymongo.MongoClient("mongodb://localhost:27017") # for localhost 
client = pymongo.MongoClient("mongodb:27017") # for docker
db = client["EnergyLive2022"]
collection = db["AggrGenerationPerType"]

# Establish messaging connection, channel and queue
#connection = pika.BlockingConnection(pika.ConnectionParameters('localhost')) # for localhost
connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq')) # for docker 
channel = connection.channel()
channel.queue_declare(queue='AggrGenerationPerType', durable=True)

# GET data and update the db
# Function to be executed every time a message is received = the data microservice has uploaded new data 
def data_consume(ch, method, properties, body):
    #print("Received: "+ body.decode('utf-8'))

    # GET HTTP request
    #base_url = "http://127.0.0.1:9002/" # for localhost 
    base_url = "http://aggrgenerationpertype_data:9002/" # for docker 
    response = requests.get(base_url+"42_GET_Data_AggrGenerationPerType")  
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
channel.basic_consume(queue='AggrGenerationPerType', on_message_callback=data_consume)
mq_thread = Thread(target = channel.start_consuming, daemon = True)
mq_thread.start()

############################################################################################################################################
# API for returning the requested data to the frontend 

app = Flask(__name__)
cors = CORS(app)

@app.route('/GET_AggrGenerationPerType', methods = ['GET'])
@cross_origin()
def index():
    email = request.args.get('email')
    token = request.args.get('token')
    #auth_response = requests.get("http://127.0.0.1:5000/api/user/user", params={'email': email,'token': token}) # for localhost
    auth_response = requests.get("http://userservice:5000/api/user/user", params={'email': email,'token': token}) # for docker
    if not auth_response.status_code == 200:  
        abort(401)

    datetime = request.args.get('datetime')
    country = request.args.get('country')
    production_type = request.args.get('production_type')
    #print(type(datetime), datetime)
    
    results = []
    for doc in collection.find({"DateTime": {"$gte": datetime}, "Country": country, "ProductionType": production_type}, {"_id": 0, "Country": 0, "ProductionType": 0}):
        results.append(doc)
        
    #print(results)
    return jsonify(results)

app.run(host='0.0.0.0', port = 9052)
