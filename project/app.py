import os
from flask import Flask, render_template, send_from_directory
 
app = Flask(__name__)
 
@app.route('/<string:page_name>/')
def render_static(page_name):
    print(page_name)
    return render_template('%s' % page_name)

@app.route('/')
def render_home():
    return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/books')
def books():
    return 'This is books page'
 
if __name__ == "__main__":
    app.run()
