from flask import Flask, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt

app = Flask(__name__)
db = SQLAlchemy()

# Configuring the app
app.config['SECRET_KEY'] = '19902022'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)
db.init_app(app)
migrate = Migrate(app, db)
app.secret_key = 'super secret key'
bcrypt = Bcrypt(app)