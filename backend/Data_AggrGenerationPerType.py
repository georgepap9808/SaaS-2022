import pandas as pd
from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, jsonify
import pika
import calendar
#import datetime #

# Scheduler that reads the new hourly data "every hour"
sched = BackgroundScheduler(daemon=True)

# Establish messaging connection, channel and queue
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()
channel.queue_declare(queue='AggrGenerationPerType', durable=True)

############################################################################################################################################
# Fetch and process data 

# Final json data the API returns
json_data = {}

# Dictionary of possible countries
countries = pd.read_csv("countries_data.csv", delimiter=';')
countries.drop(['AreaRefName', 'AreaName', 'AreaTypeCode'], axis=1, inplace = True)
countries_dict = dict(zip(countries['MapCode'], countries['Country']))

# "Current" date
yyyy, mm, dd, hh = 2022, 1, 30, 0

@sched.scheduled_job('interval', seconds=20) # fetch new data every ...
def timed_job():
  #print(datetime.datetime.now())
  #print('This job is run every 20 seconds.')

  global hh, dd, mm, yyyy
  hh = (hh + 1) % 24
  dd = (dd + 1) % calendar.monthrange(yyyy, mm)[1] if hh == 0 else dd
  mm = (mm + 1) % 12 if dd == 0 else mm
  yyyy = (yyyy + 1) if mm == 0 else yyyy

  data_file = '{:02d}'.format(yyyy)+"_"+'{:02d}'.format(mm)+"_"+'{:02d}'.format(dd)+"_"+'{:02d}'.format(hh)+"_"+"AggregatedGenerationPerType16.1.BC.csv"
  print(data_file)

  df = pd.read_csv(data_file, delimiter='\t') # read data from file
  df.drop(df[df['AreaTypeCode'] != "CTY"].index, inplace = True) # drop all unnecessary entries 
  df.drop(df[pd.isna(df['ActualGenerationOutput'])].index, inplace = True) # drop all NaN entries
  df.drop(['AreaCode', 'AreaTypeCode', 'AreaName', 'UpdateTime', 'ResolutionCode'], axis=1, inplace = True) # drop all unnecessary columns 
  df.rename(columns = {'MapCode':'Country'}, inplace = True) # remap column "MapCode" to "Country"
  df.replace({'Country': countries_dict}, inplace = True)
  #df_datetime_filtered = df[df['DateTime'] >= "2022-01-01 01:30:00.000"] # filter ...
  #print(df)
  print(df.shape)
  print() 

  global json_data
  json_data = df.to_dict(orient = 'records') 
  #print(json_data)

  # Send message to inform the backend that new data have been uploaded 
  year_month = '{:02d}'.format(yyyy)+"-"+'{:02d}'.format(mm) # ex. "2022-01"
  channel.basic_publish(exchange='', routing_key='AggrGenerationPerType', body=year_month, 
                        properties=pika.BasicProperties(delivery_mode = pika.spec.PERSISTENT_DELIVERY_MODE))
  #print("Sent message "+body.decode('utf-8'))
  
  #connection.close()

############################################################################################################################################
# API for transfering the new data to the app logic microservice 

app = Flask(__name__)

@app.route('/42_GET_Data_AggrGenerationPerType', methods = ['GET'])
def index():
    global json_data
    return jsonify(json_data)

############################################################################################################################################
# Daemon/Scheduler + Flask

sched.start()

app.run(port = 5050)
    