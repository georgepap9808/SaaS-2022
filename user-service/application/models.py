from . import db
from datetime import datetime
from datetime import timedelta
from flask_login import UserMixin



class User(UserMixin, db.Model):

    email = db.Column(db.String(255), primary_key=True)
    first_name = db.Column(db.String(255), unique=False, nullable=True)
    last_name = db.Column(db.String(255), unique=False, nullable=True)

    is_admin = db.Column(db.Boolean, default=False)

    authenticated = db.Column(db.Boolean, default=False)
    token = db.Column(db.String(255), unique=True, nullable=True)

    last_login = db.Column(db.DateTime, nullable = True)
    subscription_expiration = db.Column(db.DateTime, nullable = False , default = datetime.utcnow + timedelta(days = 30) )

    def __repr__(self):
        return '<User %r>' % (self.email)

    def to_json(self):
        return {
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'is_admin': self.is_admin,
            'authenticated': self.authenticated,
            'token': self.token,
            'last_login': self.last_login,
            'subscription_expiration': self.subscription_expiration
        }