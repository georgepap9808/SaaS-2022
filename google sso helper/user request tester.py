import requests

####### GIA USER/LOGIN AFOU EXETE PAREI TOKEN 
params = {'token':'VALE ANTISTOIXO TOKEN POU PERNEIS APO GOOLGE EDO'}

r = requests.post('http://127.0.0.1:5000/api/user/login',params = params)
print(r.text)



####### GIA USER/USER AFOU EXETE FTIAKSEI ENAN USER
params = {'email':'VALE MAIL EDO','token':'VALE ANTISTOIXO TOKEN POU PERNEIS APO GOOLGE EDO'}

r = requests.get('http://127.0.0.1:5000/api/user/user',params = params)
print(r.text)


# GIA NA PAREIS STATUS CODE
r.status_code

#gia na pareis message an einai 401
msg = r.json()['message']
print(msg) 


#gia na pareis sigkekrimena pragmata an to status code einai 200 , px email 
email  = r.json()['email']
print(email)
