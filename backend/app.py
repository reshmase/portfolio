from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

messages = []

@app.route('/')
def home():
    return "Backend Running Successfully"


@app.route('/contact', methods=['POST'])
def contact():

    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    messages.append({
        "name": name,
        "email": email,
        "message": message
    })

    return jsonify({
        "status": "Message received successfully!"
    })


@app.route('/messages')
def get_messages():

    return jsonify(messages)


if __name__ == '__main__':
    app.run(debug=True)