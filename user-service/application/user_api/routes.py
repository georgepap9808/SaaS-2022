#olo to zoumi einai edo
from . import user_api_blueprint
from .. import db, login_manager
from ..models import User
from flask import make_response, request, jsonify
import requests



@user_api_blueprint.route('/api/user/login', methods=['POST'])
def post_login():


    google_token = request.args['token']
    url  = "https://oauth2.googleapis.com/tokeninfo?id_token="+google_token
    response = requests.get(url)




    if response.status_code == 200:
        email = response.json()['email']

        user = User.query.filter_by(email =email).first()
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
    user = User.query.filter_by(email = request.args['email']).first()
    if user.authenticated:
        user.authenticated = False
        user.token   = None
        db.session.commit()
        return make_response(jsonify({'message': 'You are logged out'}))
    return make_response(jsonify({'message': 'You are not logged in'}))



@user_api_blueprint.route('/api/user/user', methods=['GET'])
def get_user():
    user = User.query.filter_by(token = request.args['email'])
    if user.authenticated:
        return make_response(jsonify({'result': user.to_json()}))
    return make_response(jsonify({'message': 'Not logged in'})), 401
