
---------------------------------------------------------------------------

### ActualTotalLoad: <br /><br />

Type: GET

URL: http://localhost:5000/GET_ActualTotalLoad?

Params: 
```json
{
	"datetime": "2999-01-01 00:00:00.000", 
	"country": "Greece", 
}
```

Example: http://localhost:5000/GET_ActualTotalLoad?datetime=2022-01-01 00:00:00.000&country=Greece

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

URL: http://localhost:5000/GET_PhysicalFlows

Params: 
```json
{
	"datetime": "2999-01-01 00:00:00.000", 
	"from_country": "Greece", 
	"to_country": "Italy",
}
```

Example: http://localhost:5000/GET_ActualTotalLoad?datetime=2022-01-01 00:00:00.000&country=Greece

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

URL: http://localhost:5000/GET_AggrGenerationPerType

Params: 
```json
{
	"datetime": "2999-01-01 00:00:00.000", 
	"country": "Greece", 
	"production_type": "Solar",
}
```

Example: http://localhost:5000/GET_AggrGenerationPerType?datetime=2999-01-01 00:00:00.000&country=Greece&production_type=Solar

Reply: 
```json 
{    
	"DateTime": "2022-01-23 19:00:00.000",   	
	"ActualGenerationOutput": 2809.06
}
```

---------------------------------------------------------------------------
