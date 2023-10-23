import json

from .._version import __version__


async def test_config(jp_fetch):
    # When
    response = await jp_fetch("jupyterlab_running_sessions", "config")
    # Then
    assert response.code == 200
    payload = json.loads(response.body)
    assert payload == {
        "extension": "jupyterlab_running_sessions",
        "version": __version__
    }
