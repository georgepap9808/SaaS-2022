
---------------------------------------------------------------------------

### Login/Signup: <br /><br />

Type: POST

URL: /api/user/login

Params: 
```json
{
	"token": "djfas7584a4pnvrajkasdaa6a6n5lj5a6klja3" 
}
```

Reply:
```json 
{    
	"token": "djfas7584a4pnvrajkasdaa6a6n5lj5a6klja3",   
	"email": "saas@gmail.com"
}
```
---------------------------------------------------------------------------

### Logout: <br /><br />

Type: POST

URL: /api/user/logout

Params: 
```json
{
	"token": "djfas7584a4pnvrajkasdaa6a6n5lj5a6klja3",   
	"email": "saas@gmail.com" 
}
```

---------------------------------------------------------------------------

### User Info: <br /><br />

Type: GET

URL: /api/user/user

Params: 
```json
{
	"token": "djfas7584a4pnvrajkasdaa6a6n5lj5a6klja3",   
	"email": "saas@gmail.com"  
}
```

Reply:
```json 
{    
	"token": "djfas7584a4pnvrajkasdaa6a6n5lj5a6klja3",   
	"email": "saas@gmail.com",
	"first_name":"Nikolaos",
	"last_name":"Markakis",
	"is_admin":False,
	"authenticated":True,
	"last_login":"timestamp",
	"subscription_expiration":"timestamp"

}
```
---------------------------------------------------------------------------

### Subscription Extension: <br /><br />

Type: POST

URL: /api/user/subextend

Params: 
```json
{
	"token": "djfas7584a4pnvrajkasdaa6a6n5lj5a6klja3",   
	"email": "saas@gmail.com",
	"days": 30
}
```
