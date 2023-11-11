from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4


db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class Address(db.Model):
    __tablename__ = 'address'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.String(100), unique=True, nullable=False)
    user_id = db.Column(db.Integer)
    user_name = db.Column(db.String(100))
    email = db.Column(db.String(120), nullable=False)
    House_no = db.Column(db.String(200), nullable=False)
    Area = db.Column(db.String(300), nullable=False)
    Landmark = db.Column(db.String(200), nullable=False)
    Pincode = db.Column(db.String(200), nullable=False)
    Town_City = db.Column(db.String(200), nullable=False)
    country = db.Column(db.String(200), nullable=False)
    state = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.String(100))

    def __init__(self, key, user_id, user_name, email, House_no, Area, Landmark, Pincode, Town_City, country, state, created_at):
        self.key = key
        self.user_id = user_id
        self.user_name = user_name
        self.email = email
        self.House_no = House_no
        self.Area = Area
        self.Landmark = Landmark
        self.Pincode = Pincode
        self.Town_City = Town_City
        self.country = country
        self.state = state
        self.created_at = created_at
