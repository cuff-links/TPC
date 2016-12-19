from tpc_flask.TPC_Flask import create_app

import pytest


@pytest.fixture
def app():
    app = create_app()
    return app
