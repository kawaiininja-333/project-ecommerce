

from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from datetime import datetime
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


db = SQLAlchemy()

registerd_time = datetime.utcnow()


def get_uuid():
    return uuid4().hex


class Rating(db.Model):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.String(100), unique=True,
                    nullable=False, default=get_uuid)
    user_id = db.Column(db.Integer)
    user_name = db.Column(db.String(80))
    email = email = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(400))
    content = db.Column(db.String(1000))
    rating = db.Column(db.Integer)
    product_id = db.Column(db.Integer)
    created_at = db.Column(db.String(100))

    def __init__(self, key, user_id, user_name, rating, email, title, content, product_id, created_at):
        self.key = key
        self.user_id = user_id
        self.user_name = user_name
        self.rating = rating
        self.title = title
        self.content = content
        self.email = email
        self.product_id = product_id
        self.created_at = created_at
