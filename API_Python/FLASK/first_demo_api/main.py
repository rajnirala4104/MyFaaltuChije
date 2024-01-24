from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home_route():
  return jsonify({
    "message":"APi is running without any ERROR",
    "data": None
  })


@app.route('/name/<string:name>')
def name_route(name):
  return jsonify({
    "message":"The name route is running",
    "name": name
  })


if __name__ == "__main__":
  app.run(debug=True)