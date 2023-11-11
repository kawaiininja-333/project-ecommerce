# app.py
from flask import Flask, request, jsonify
from datetime import timedelta
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from models import db, Comment, get_uuid

from retriveDetails import get_user_comment_details  # Correct the import here

api = Flask(__name__)
CORS(api, supports_credentials=True)

connection_details = {
    'host': 'localhost',
    'user': 'root',
    'password': '30D-TRISTAN-#python',
    'db': 'user_authentication'
}

api.config['SECRET_KEY'] = 'kjsabdifhjbduj-shkafhsbjfbhjsb-sfahksbfjk-sbfkabsjk-snfknbakhsbf-sbfkjabsk-sjbfkhasb'
api.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:30D-TRISTAN-#python@localhost/components'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

jwt = JWTManager(api)

SQLALCHEMY_ECHO = True

db.init_app(api)

with api.app_context():
    db.create_all()


@api.route('/')
def comments_home():
    return "<h1>Comment section</h1>"


@api.route('/comments', methods=['POST'])  # Corrected the typo here
def post_comments():
    email = request.json.get("email", None)
    content = request.json.get("comment", None)

    user_id = get_user_comment_details(connection_details, email)

    if user_id is not None:
        new_comment = Comment(user_id=user_id, key=get_uuid(), content=content)
        db.session.add(new_comment)
        db.session.commit()

        # Query the newly created comment
        new_comment = Comment.query.filter_by(id=new_comment.id).first()

        return jsonify({'message': 'Comment posted successfully', 'comment': {
            'id': new_comment.id,
            'user_id': new_comment.user_id,
            'content': new_comment.content,
            'created_at': new_comment.created_at,
            'key': new_comment.key
        }})
    else:
        return jsonify({'message': 'User not found or error with connection '}, {'error': email}, {"error": content})


if __name__ == '__main__':
    api.run()
