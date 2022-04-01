from flask import Flask, render_template, request, jsonify
from init import db
app = Flask(__name__)


@app.route('/')
def home():
    pass


if __name__ == "__main__":
    app.run(debug=True)
