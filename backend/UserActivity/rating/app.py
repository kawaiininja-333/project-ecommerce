from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required
from flask_cors import CORS
from datetime import timedelta
from models import db, Rating, get_uuid
from datetime import datetime


from retriveDetails import get_user_rate_details

api = Flask(__name__)
CORS(api, supports_credentials=True)

connection_details = {
    'host': 'localhost',
    'user': 'root',
    'password': '30D-TRISTAN-#python',
    'db': 'user_authentication'
}

api.config['SECRET_KEY'] = 'kjsabdifhjbduj-piwqrux.m./15645nm9jfbhjsb-sfahksbfjk-sbfkabsjk-snfknbakhsbf-sbfkjabsk-sjbfkhasb'
api.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:30D-TRISTAN-#python@localhost/components'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

jwt = JWTManager(api)


SQLALCHEMY_ECHO = True

db.init_app(api)

with api.app_context():
    db.create_all()


@api.route('/')
def rating_home():
    return "<h1>Rating</h1>"


@api.route('/rating', methods=['POST'])
def post_rating():
    email = request.json.get("email", None)
    rating = request.json.get("rate", None)
    title = request.json.get("title", None)
    content = request.json.get("content", None)
    product_id = request.json.get("product_id", None)

    user_id, user_name = get_user_rate_details(connection_details, email)

    if user_id is not None:

        existing_rating = Rating.query.filter_by(
            user_id=user_id, product_id=product_id).first()

        new_ratings = None

        if existing_rating:
            existing_rating.rating = rating
            existing_rating.content = content
            existing_rating.title = title
            existing_rating.created_at = datetime.now()

        else:
            new_ratings = Rating(user_id=user_id, user_name=user_name, key=get_uuid(
            ), email=email, title=title, content=content, rating=rating, product_id=product_id, created_at=datetime.now())
            db.session.add(new_ratings)

        db.session.commit()

        if new_ratings:
            new_ratings = Rating.query.filter_by(id=new_ratings.id).first()
            response_data = {
                'message': 'Rating updated successfully' if existing_rating else 'Rating posted successfully',
                'rating': {
                    'id': new_ratings.id,
                    'user_id': new_ratings.user_id,
                    'user_name': new_ratings.user_name,
                    'rate': new_ratings.rating,
                    'title': new_ratings.title,
                    'content': new_ratings.content,
                    'created_at': new_ratings.created_at,
                    'product': new_ratings.product_id,
                    'key': new_ratings.key
                }
            }
            return jsonify(response_data)

        else:
            return jsonify({'error': 'User not found or error with connection '}, {'error': email}, {"error": rating})


@api.route('/profile_details/<get_product_id>')
def get_profile_details(get_product_id):
    if not get_product_id:
        return jsonify({"error": "No Product ID found"}), 400

    rating_details = Rating.query.filter_by(product_id=get_product_id).all()

    if not rating_details:
        return jsonify({"error": "No Rating found for this product (Empty)"}), 404

    response_data = []

    for rating in rating_details:
        response_data.append({
            "id": rating.id,
            "user_name": rating.user_name,
            "key": rating.key,
            'product': rating.product_id,
            'rating': rating.rating,
            "title": rating.title,
            "content": rating.content,
            "created_at": rating.created_at,
        })

    return jsonify(response_data), 200


if __name__ == '__main__':
    api.run()
