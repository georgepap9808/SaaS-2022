from requests import get

def authenticate(email,token):
    r = get("http://localhost:5000/api/user/user",params={'email':email,'token':token})
    if r.status_code == 200:
        return True 
    else: 
        return False