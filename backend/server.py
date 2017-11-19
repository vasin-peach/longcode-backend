from flask import Flask, request
from flask_cors import CORS
from compiler import Code
import sys

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def App():
    data = request.data
    # data.save('') # save file.py
    # com = Code('add')
    # com.run()


if __name__ == "__main__":
    print('----------READY----------')
    app.run()
