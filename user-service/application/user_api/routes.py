#olo to zoumi einai edo
from . import user_api_blueprint
from .. import db, login_manager
from ..models import User
from flask import make_response, request, jsonify
import requests
from flask_login import current_user, login_user, logout_user, login_required

@login_manager.user_loader
def load_user(email):
    return User.query.filter_by(email = email).first()

@login_manager.request_loader
def load_user_from_request(request):
    token = request.headers.get('Authorization')
    if token:
        token = token.replace('Basic ', '', 1)
        user = User.query.filter_by(token = token).first()
        if user:
            return user
    return None

###MAKE LOGIN ROUTE !!!!
@user_api_blueprint.route('/api/user/login', methods=['POST'])
def post_login():
    google_token = request.form['token']
    url  = "https://oauth2.googleapis.com/tokeninfo?id_token="+google_token
    response = requests.get(url)

    if response.status_code == 200:
        email = response.json()['email']

        user = User.query.filter_by(email).first()
        if user:
            user.token = google_token
            user.authenticated = True
            db.session.commit()

            return make_response(jsonify({'message': 'Logged in', 'token': user.token}))
        else:
            first_name = response.json()['given_name']
            last_name = response.json()['family_name']

            user = User()
            user.email = email
            user.first_name = first_name
            user.last_name = last_name
            user.authenticated = True
            user.token = google_token

            db.session.add(user)
            db.session.commit()

            return make_response(jsonify({'message': 'User Added', 'result': user.to_json(),'token': user.token}))

    return make_response(jsonify({'message': 'Not logged in'}), 401)

@user_api_blueprint.route('/api/user/logout', methods=['POST'])
def post_logout():
    user = User.query.filter_by(email = request['email']).first()
    if user.authenticated:
        user.authenticated = False
        user.token   = None
        db.session.commit()
        return make_response(jsonify({'message': 'You are logged out'}))
    return make_response(jsonify({'message': 'You are not logged in'}))





