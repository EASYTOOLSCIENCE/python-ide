from flask import Flask, Response

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return Response("Hello world")

if __name__ == "__main__":
    app.run(debug=True)
