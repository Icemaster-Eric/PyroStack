import os
from starlette.staticfiles import StaticFiles
from starlette.applications import Starlette

from .templating import PyroTemplates


def init_pyro(app: Starlette):
    """
    Mounts PyroStack's static files to `/pyrostack-resources`
    """
    app.mount(
        "/pyrostack-resources",
        StaticFiles(
            directory=os.path.join(
                os.path.dirname(
                    os.path.abspath(__file__)
                ),
                "resources"
            )
        ),
        "pyrostack-resources"
    )
