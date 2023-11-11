# # app(1).py
# from flask import Flask, jsonify
# from flask_cors import CORS
# from models import db, Rating

# api = Flask(__name__)
# CORS(api, supports_credentials=True)

# # Configuration and database setup


# @api.route('/')
# def e_commerce_home():
#     return "<h1>E-commerce API</h1>"


# @api.route('/rating_details/<get_product_id>')
# def get_ratings(get_product_id):
#     if not get_product_id:
#         return jsonify({"error": "No Product ID found"}), 400

#     rating_details = Rating.query.filter_by(product_id=get_product_id).first()

#     if rating_details is None:
#         return jsonify({"error": "No Rating found for this product (Empty)"}), 404

#     response_data = {
#         "id": rating_details.id,
#         "key": rating_details.key,
#         'product': rating_details.product_id,
#         'ratings': rating_details.ratings
#     }

#     return jsonify(response_data), 200


# if __name__ == '__main__':
# #     api.run()
# from datetime import datetime
# registerd_time = datetime.utcnow()

# print(registerd_time)
