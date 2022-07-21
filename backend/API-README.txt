
---------------------------------------------------------------------------

ActualTotalLoad:

Type: GET
URL: http://localhost:5000/GET_ActualTotalLoad?datetime=2022-01-01 00:00:00.000&country=Greece
Reply: 
{    
	"DateTime": "2022-01-23 19:00:00.000",   
	"TotalLoadValue": 7538.02
}

---------------------------------------------------------------------------

AggrGenerationPerType:

Type: GET
URL: http://localhost:5000/GET_AggrGenerationPerType?datetime=2999-01-01 00:00:00.000&country=Greece&production_type=Solar
Reply: 
{    
	"DateTime": "2022-01-23 19:00:00.000",   	
	"ActualGenerationOutput": 2809.06
}

---------------------------------------------------------------------------

PhysicalFlows:

Type: GET
URL: http://localhost:5000/GET_PhysicalFlows?datetime=2999-01-01 00:00:00.000&from_country=Greece&to_country=Italy
Reply: 
{    
	"DateTime": "2022-01-23 19:00:00.000",   	
	"FlowValue": 347.79
}

---------------------------------------------------------------------------



