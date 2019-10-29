import random
import os
import sqlite3
from flask import Flask, render_template, request
from forms.forms import registration, logon
from config import Config

from flask_wtf.csrf import CSRFProtect, CSRFError



app = Flask(__name__, static_folder='../static', template_folder='../static/templates')
app.config.from_object(Config)

csrf = CSRFProtect(app)
SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/homehello') # take note of this decorator syntax, it's a common pattern
@app.route('/hello') # take note of this decorator syntax, it's a common pattern
def hello():
    # It is good practice to only call a function in your route end-point,
    # rather than have actual implementation code here.
    # This allows for easier unit and integration testing of your functions.
    return get_hello()


def get_hello():
    greeting_list = ['Yo', 'Hey', 'Awrite']
    return random.choice(greeting_list)

@app.route('/test', methods=['GET', 'POST'])
def test():
    return render_template('test.html')

@app.route('/writingPost', methods=['GET', 'POST']) # take note of this decorator syntax, it's a common pattern
def testPost():
    # It is good practice to only call a function in your route end-point,
    # rather than have actual implementation code here.
    # This allows for easier unit and integration testing of your functions.
    return post_test()

@app.route('/testThis', methods=['GET', 'POST']) # take note of this decorator syntax, it's a common pattern
def testThis():
    # It is good practice to only call a function in your route end-point,
    # rather than have actual implementation code here.
    # This allows for easier unit and integration testing of your functions.
    return get_test()

@app.route('/login', methods=['GET', 'POST'])
def login():
    loginForm = logon(request.form)
    return render_template('login.html', form=loginForm)

@app.route('/register', methods=['GET', 'POST'])
def register():
    registerForm = registration(request.form)   

    return render_template('register.html', form=registerForm)

def post_test():
    conn =sqlite3.connect('testData.db')
    conn.row_factory = lambda cursor, row: row[0]

    c = conn.cursor()
    c.execute("select greeting from testData")    
    rows = c.fetchall()
    testing_list = rows
    return random.choice(testing_list)

def get_test():
    conn =sqlite3.connect('testData.db')
    conn.row_factory = lambda cursor, row: row[0]

    c = conn.cursor()
    c.execute("select greeting from testData")    
    rows = c.fetchall()
    testing_list = rows
    return random.choice(testing_list)


@app.route('/writing')
def writing():
    return render_template('writing.html')

if __name__ == '__main__':
      app.run('localhost', 5000, debug=True)