from flask import Flask, redirect, render_template
from flask_bower import Bower


def create_app(debug=False):
    app = Flask('tpc_flask')
    app.debug = debug
    Bower(app)

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        if path == "blog":
            return redirect('http://blog.powercoder.tech', code=302)
        return render_template('index.html')
    return app


if __name__ == '__main__':
    app = create_app()
    app.run()
