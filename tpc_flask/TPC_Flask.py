from flask import Flask, redirect, render_template
from flask_bower import Bower

app = Flask('tpc_flask')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path == "blog":
        return redirect('http://blog.powercoder.tech', code=302)
    return render_template('index.html')


if __name__ == '__main__':
    Bower(app)
    app.run()
