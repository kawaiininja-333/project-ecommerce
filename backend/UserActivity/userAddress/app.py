from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from datetime import timedelta
from datetime import datetime
from models import db, Address, get_uuid

from retriveDetails import get_user_rate_details


api = Flask(__name__)
CORS(api, supports_credentials=True)

connection_details = {
    'host': 'localhost',
    'user': 'root',
    'password': '30D-TRISTAN-#python',
    'db': 'user_authentication'
}


api.config['SECRET_KEY'] = 'ugduheuwhguoahjuoiei-gewhg7yt9724tuj4ovth4k-huu54529616884vggew8iqwfgrrh86thaerhoaerguw-4bjl'
api.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:30D-TRISTAN-#python@localhost/components'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

jwt = JWTManager(api)


SQLALCHEMY_ECHO = True

db.init_app(api)

with api.app_context():
    db.create_all()


@api.route('/')
def address_home():
    return "<h1>Address<h1>"


@api.route('/address', methods=['POST'])
def post_address():
    email = request.json.get('email', None)
    house_no = request.json.get('house_no', None)
    Area = request.json.get('Area', None)
    Landmark = request.json.get('Landmark', None)
    Pincode = request.json.get('Pincode', None)
    Town_City = request.json.get('Town_City', None)
    country = request.json.get('country', None)
    state = request.json.get('state', None)

    user_id, user_name = get_user_rate_details(connection_details, email)

    if user_id is not None:
        new_address = Address(key=get_uuid(), user_id=user_id, user_name=user_name, email=email,
                              House_no=house_no, Area=Area, Landmark=Landmark, Pincode=Pincode,
                              Town_City=Town_City, country=country, state=state, created_at=datetime.now())

        # Commit the changes to the database
        db.session.add(new_address)
        db.session.commit()

        response_data = {
            'message': 'Address added successfully',
            'address': {
                'id': new_address.id,
                'user_id': new_address.user_id,
                'user_name': new_address.user_name,
                'email': new_address.email,
                'house_no': new_address.House_no,
                'Area': new_address.Area,
                'Landmark': new_address.Landmark,
                'Pincode': new_address.Pincode,
                'Town': new_address.Town_City,
                'country': new_address.country,
                'state': new_address.state,
            }
        }
        return jsonify(response_data)
    else:
        return jsonify({'error': 'User not found or error with connection'})


@api.route('/address/<getemail>')
def get_address(getemail):
    if not getemail:
        return jsonify({"error": "No E-mail ID found"}), 400

    address_details = Address.query.filter_by(email=getemail).all()

    if not address_details:
        return jsonify({"error": "No Address found for this email (Empty)"}), 404

    response_data = []

    for address in address_details:
        response_data.append({
            'id': address.id,
            'user_id': address.user_id,
            'user_name': address.user_name,
            'email': address.email,
            'house_no': address.House_no,
            'Area': address.Area,
            'Landmark': address.Landmark,
            'Pincode': address.Pincode,
            'Town': address.Town_City,
            'country': address.country,
            'state': address.state,
        })

    return jsonify(response_data), 200


if __name__ == '__main__':
    api.run()
