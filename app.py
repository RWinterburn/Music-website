from flask import Flask, render_template
from models import software


app = Flask(__name__)

@app.route('/')
def index():
    data = software()
    return render_template('index.html', **data)

@app.route('/home')
def home():
    data = software()
    return render_template('home.html', **data)

@app.route('/music')
def music():
    data = software()
    return render_template('music.html', **data)

@app.route('/videos')
def videos():
    data = software()
    return render_template('videos.html', **data)

@app.route('/press')
def press():
    data = software()
    return render_template('press.html', **data)


@app.route('/shows')
def shows():
    data = software()
    return render_template ('shows.html', **data)

@app.route('/gallery')
def gallery():
    data = software()
    return render_template ('gallery.html', **data)

@app.route('/contact')
def contact():
    data = software()
    return render_template ('contact.html', **data)


if __name__ == '__main__':
    app.run(debug=True)
