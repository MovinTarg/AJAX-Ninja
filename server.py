from flask import Flask, render_template, request, redirect

app = Flask(__name__)
app.secret_key = 'movintarg'

@app.route('/')
def index():
    return render_template('index.html')

app.run(debug=True)