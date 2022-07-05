import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
basedir = os.path.abspath(os.path.dirname(__file__))


if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')



class DevelopmentConfig(Config):
    ENV = "development"
    DEBUG = True

    SQLALCHEMY_ECHO = True


class ProductionConfig(Config):
    ENV = "production"
    DEBUG = False

    SQLALCHEMY_ECHO = False
