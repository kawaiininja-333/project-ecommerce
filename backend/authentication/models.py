# models.py
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from datetime import datetime


db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class User(db.Model):
    __tablename__ = 'users_details'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    key = db.Column(db.String(100), unique=True,
                    nullable=False, default=get_uuid)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120))
    address = db.Column(db.String(255))
    phone = db.Column(db.String(15))
    date_of_birth = db.Column(db.Date)
    profile_picture = db.Column(db.String(255))
    terms_and_conditions = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    # orders = db.relationship('Order', backref='user', lazy=True)

    def __init__(self, key, name, email, password, phone, terms_and_conditions, address):
        self.name = key
        self.name = name
        self.email = email
        self.password = password
        self.phone = phone
        self.terms_and_conditions = terms_and_conditions
        self.address = address


class UserDetail(db.Model):
    __tablename__ = 'users_profile_details'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.String(100), unique=True,
                    nullable=False, default=get_uuid)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(255))
    phone = db.Column(db.String(15))
    date_of_birth = db.Column(db.Date)
    profile_picture = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, key, name, email, phone, address):
        self.name = key
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address
