from flask import Flask, Response, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import pydoodle
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return Response("Hello world")

@app.route("/api/data", methods=["POST"])
def process_data():
    data = request.get_json()
    print("Data coming from the frontend: ", data)

    c = pydoodle.Compiler(clientId=os.getenv("PYDOODLE_CLIENT_ID"), clientSecret=os.getenv("PYDOODLE_CLIENT_SECRET"))
    
    if not data['input']:
        data['input']=0

    result = c.execute(script=data["code"], language="python3", stdIn="{}".format(data["input"]))
    usage = c.usage()
    #print(usage, result.output[0], sep='\n')

    responses = result.output[0].split("\n")
    response = {'message': responses}

    return jsonify(response), 200

if __name__ == "__main__":
    app.run(debug=True)
