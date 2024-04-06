import pytz
from flask import Flask, jsonify, request
import json
from flask_cors import CORS, cross_origin
from flasgger import Swagger
import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__)
CORS(app, resources={r"/login": {"origins": "http://localhost:3001"}})
CORS(app, resources={r"/getUsers": {"origins": "http://localhost:3001"}})

app = Flask(__name__)
swagger = Swagger(app)
cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(cred)

@app.route('/login', methods=['POST'])
@cross_origin(origin='*')
def login():
    try:
        db = firestore.client()
        user_id = request.args.get('id')
        user_name = request.args.get('name')
        password = request.args.get('password')

        lat, lon = get_location()
        print("latitude: ", lat, "longitude: ", lon)

        data = {"name": user_name, "password": password, "lat": lat, "lon": lon}
        doc_ref = db.collection("users").document(user_id)
        doc_ref.set(data)

        users_ref = db.collection("users")
        docs = users_ref.stream()

        for doc in docs:
            print(f"{doc.id} => {doc.to_dict()}")

        return json.dumps(data)
    except Exception as e:
        print(f'Error occurred while logging in: {e}')
        return None, None


def get_location():
    api_key = '<API_KEY>'
    url = f'https://www.googleapis.com/geolocation/v1/geolocate?key={api_key}'
    print("fetching status")
    data = {}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    try:
        response = requests.post(url, data=json_data, headers=headers)
        res_code = response.status_code
        data = response.json()
        print("data: " + str(data))
        print(res_code)

        if res_code == 200:
            # Extract latitude and longitude from the response
            location = data['location']
            latitude = location['lat']
            longitude = location['lng']
            return latitude, longitude
        else:
            print(f'Failed to retrieve location data: {res_code}')
            return None, None
    except Exception as e:
        print(f'Error occurred while fetching location: {e.with_traceback()}')
        return None, None


@app.route('/getUsers', methods=['GET'])
@cross_origin(origin='*')
def getUsers():
    db = firestore.client()
    user_id = request.args.get('user_id')
    game_id = request.args.get('game_id')

    users_ref = db.collection("users")
    docs = users_ref.stream()
    users = list()

    for doc in docs:
        if doc.id == user_id:
            continue
        doc_details = doc.to_dict()
        data = {'name': doc_details.get('name'), 'rating': 7}
        users.append(data)

    return users


if __name__ == '__main__':
    app.run(debug=True, port=5002)
