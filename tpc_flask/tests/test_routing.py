import pytest

from flask import url_for


@pytest.mark.options(debug=False)
def test_app_not_debug(app):
    assert not app.debug, 'Ensure the app not in debug mode'


def test_app_request(client):
    # Make sure home page loads.
    res = client.get(url_for('catch_all'))
    assert res.status_code == 200
    assert res.mimetype == 'text/html'
    assert b'ng-app="tpc_flask"' in res.data


def test_app_routing_redirects(client):
    # Load homepage and verify markup
    res = client.get('/')
    assert b'ng-app="tpc_flask"' in res.data, 'Home page is not loading properly.'

    # Check if server automatically reroutes to home page
    res_reroute = client.get('/rerouteme')
    assert b'ng-app="tpc_flask"' in res_reroute.data, 'Route is not being redirected to home page.'

    # Check that blog route does not load the same page. Should redirect to blog page with 302 code.
    res_blog = client.get('/blog')
    assert b'ng-app=tpc_flask' not in res_blog.data
    assert res_blog.status_code == 302, 'Permanent redirect is not working properly.'
