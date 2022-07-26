## Dockerized back-end
### Instructions:

In each one of the 3 different dataset folders, in the data/ folder there should be the corresponding csv data files unzipped.

Build the app by executing the following command: <br /><br />

docker-compose up -d 

---------------------------------------------------------------------------

# API Description

### ActualTotalLoad: <br /><br />

Type: GET

URL: http://localhost:9050/GET_ActualTotalLoad?

Params: 
```json
{
	"token": "abcd",
	"email": "efg",
	"datetime": "1999-01-01 00:00:00.000", 
	"country": "Greece" 
}
```

Example: http://localhost:9050/GET_ActualTotalLoad?token=abcd&email=efg&datetime=1999-01-01 00:00:00.000&country=Spain

Reply:
```json 
{    
	"DateTime": "2022-01-23 19:00:00.000",   
	"TotalLoadValue": 7538.02
}
```

---------------------------------------------------------------------------

### PhysicalFlows:

Type: GET

URL: http://localhost:9051/GET_PhysicalFlows

Params: 
```json
{
	"token": "abcd",
	"email": "efg",
	"datetime": "1999-01-01 00:00:00.000", 
	"from_country": "Greece", 
	"to_country": "Italy"
}
```

Example: http://localhost:9051/GET_PhysicalFlows?token=abcd&email=efg&datetime=1999-02-01 00:00:00.000&from_country=Greece&to_country=Albania

Reply: 
```json 
{    
	"DateTime": "2022-01-23 19:00:00.000",   	
	"FlowValue": 347.79
}
```

---------------------------------------------------------------------------

### AggrGenerationPerType:

Type: GET

URL: http://localhost:9052/GET_AggrGenerationPerType

Params: 
```json
{
	"token": "abcd",
	"email": "efg",
	"datetime": "1999-01-01 00:00:00.000", 
	"country": "Greece", 
	"production_type": "Solar"
}
```

Example: http://localhost:9052/GET_AggrGenerationPerType?token=abcd&email=efg&datetime=1999-01-01 00:00:00.000&country=Greece&production_type=Solar

Reply: 
```json 
{    
	"DateTime": "2022-01-23 19:00:00.000",   	
	"ActualGenerationOutput": 2809.06
}
```

---------------------------------------------------------------------------
