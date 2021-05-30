from flask import Flask,request,jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True,origins="*")  # 设置跨域


if __name__ == '__main__':
    app.run(debug=True,threaded=True)