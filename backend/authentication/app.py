# app.py
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import db, User, UserDetail
import json
from models import get_uuid


# Your code that uses the json module


api = Flask(__name__)
CORS(api, supports_credentials=True)

api.config['SECRET_KEY'] = 'alshljfkcsldifiebf-jksbnedjbnjksbnjldb'
api.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:30D-TRISTAN-#python@localhost/user_authentication'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=30)

jwt = JWTManager(api)

SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(api)

db.init_app(api)

with api.app_context():
    db.create_all()


@api.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@api.route('/logintoken', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"error": "wrong email or password"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    # if email != "test" or password != "test":
    #     return {"msg": "wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    # response = {"access_toke": access_token}

    return jsonify({
        "email": email,
        "access_token": access_token
    })


@api.route("/signup", methods=["POST"])
def signup():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    phone = request.json["phone"]
    terms_and_conditions = request.json["terms_and_conditions"]
    address = request.json["address"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(key=get_uuid(), name=name, email=email,
                    password=hashed_password, phone=phone, terms_and_conditions=terms_and_conditions, address=address)
    new_user_details = UserDetail(
        key=get_uuid(), name=name, email=email, phone=phone, address=address)
    db.session.add(new_user)
    db.session.add(new_user_details)
    db.session.commit()

    return jsonify({"message": "User registered successfully", "id": new_user.id, "email": new_user.email}), 201


@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response

    except (RuntimeError, KeyError):
        return response


@api.route("/logout", methods=["post"])
def logout():
    response = jsonify({"msg": "logout Successful"})
    unset_jwt_cookies(response)
    return response


@api.route('/profile/<getemail>')
@jwt_required()
def my_profile(getemail):
    print(getemail)
    if not getemail:
        return jsonify({"error": "Unauthorized Access"}), 401
    user = User.query.filter_by(email=getemail).first()

    response_body = {
        "id": user.id,
        "key": user.key,
        "name": user.name,
        "phone": user.phone,
        "email": user.email,
        "password": user.password,
        "terms_and_conditions": user.terms_and_conditions,
        "address": user.address

    }
    return response_body


@api.route('/profile_details/<getemail>')
@jwt_required()
def get_user_details(getemail):
    if not getemail:
        return jsonify({"error": "Email parameter is missing"}), 400

    user_detail = UserDetail.query.filter_by(email=getemail).first()

    if user_detail is None:
        return jsonify({"error": "User not found"}), 404

    response_body = {
        "id": user_detail.id,
        "key": user_detail.key,
        "name": user_detail.name,
        "phone": user_detail.phone,
        "email": user_detail.email,
        "address": user_detail.address
    }

    return jsonify(response_body), 200


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=8080)
