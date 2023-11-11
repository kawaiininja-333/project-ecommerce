from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from datetime import datetime
from models import db, Cart, get_uuid
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
api.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:30D-TRISTAN-#python@localhost/orders'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

jwt = JWTManager(api)

SQLALCHEMY_ECHO = True

db.init_app(api)

with api.app_context():
    db.create_all()


@api.route('/')
def address_home():
    return "<h1>Cart<h1>"


@api.route('/cart', methods=['POST'])
def add_to_cart():
    email = request.json.get('email', None)
    product_id = request.json.get('product_id', None)
    quantity = request.json.get('quantity', None)
    price = request.json.get('price', None)

    user_id, user_name = get_user_rate_details(connection_details, email)

    if user_id is not None:
        existing_cart = Cart.query.filter_by(
            user_id=user_id, product_id=product_id).first()

        add_new_cart = None

        if existing_cart:
            existing_cart.quantity = quantity
        else:
            add_new_cart = Cart(key=get_uuid(), user_id=user_id,
                                user_name=user_name, email=email, product_id=product_id, price=price, quantity=quantity, created_at=datetime.now())
            db.session.add(add_new_cart)

        db.session.commit()

        if existing_cart or add_new_cart:
            cart_item = existing_cart if existing_cart else add_new_cart
            response_data = {
                'message': 'Added to Cart' if not existing_cart else 'Cart updated successfully',
                'cart': {
                    'id': cart_item.id,
                    'user_id': cart_item.user_id,
                    'user_name': cart_item.user_name,
                    'email': cart_item.email,
                    'product_id': cart_item.product_id,
                    'price': cart_item.price,
                    'quantity': cart_item.quantity,
                }
            }
            return jsonify(response_data)

    return jsonify({'error': 'User not found or error with connection'})


@api.route('/cart/<getemail>')
def get_cart(getemail):
    if not getemail:
        return jsonify({'error': "No E-mail ID found"}), 404

    user_cart = Cart.query.filter_by(email=getemail).all()

    if not user_cart:
        return jsonify({'message': "Your Cart is empty"})

    response_data = []

    for cart in user_cart:
        response_data.append({
            'cart': {
                'id': cart.id,
                'user_id': cart.user_id,
                'user_name': cart.user_name,
                'email': cart.email,
                'product_id': cart.product_id,
                'price': cart.price,
                'quantity': cart.quantity
            }
        })
    return jsonify(response_data), 200


@api.route('/cart/delete', methods=['DELETE'])
def remove_from_cart():
    data = request.json
    product_id = data.get('product_id')
    user_id = data.get('user_id')
    email = data.get('email')

    if user_id is None or product_id is None:
        return jsonify({
            'error': 'Missing user_id or product_id',
            'id': user_id,
            'p_id': product_id
        }), 400

    cart = Cart.query.filter_by(
        product_id=product_id, email=email, user_id=user_id).first()

    if cart is None:
        return jsonify({'error': 'Cart not found'}, 404)

    db.session.delete(cart)
    db.session.commit()

    return jsonify({'message': 'Cart item deleted successfully'}, 200)


if __name__ == '__main__':
    api.run()
