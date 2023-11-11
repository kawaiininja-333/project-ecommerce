# models.py
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from datetime import datetime

db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.String(100), unique=True, nullable=False, default=get_uuid)
    user_id = db.Column(db.Integer) 
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self,key, user_id, content): 
        self.user_id = key
        self.user_id = user_id
        self.content = content


# class Comment(db.Model):
#     __tablename__ = 'comments'

#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users_details.id'))
#     email = email = db.Column(db.String(120), unique=True, nullable=False)
#     content = db.Column(db.Text)  # The content of the comment
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)

#     user = db.relationship('users_details', back_populates='comments')

#     def __init__(self, user_id, content):
#         self.user_id = user_id
#         self.content = content
