from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4


db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class Cart(db.Model):
    __tablename__ = 'usercart'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.String(100), unique=True, nullable=False)
    user_id = db.Column(db.Integer)
    user_name = db.Column(db.String(100))
    email = db.Column(db.String(120), nullable=False)
    product_id = db.Column(db.Integer)
    price = db.Column(db.String(100))
    quantity = db.Column(db.Integer)
    created_at = db.Column(db.String(100))

    def __init__(self, key, user_id, user_name, email, product_id, price, quantity, created_at):
        self.key = key
        self.user_id = user_id
        self.user_name = user_name
        self.email = email
        self.product_id = product_id
        self.price = price
        self.quantity = quantity
        self.created_at = created_at
