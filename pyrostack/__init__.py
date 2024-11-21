import os
from starlette.routing import Mount
from starlette.staticfiles import StaticFiles

from .templating import PyroTemplates


pyro_resources_route = Mount(
    "/pyrostack-resources",
    StaticFiles(directory=os.path.join(os.path.dirname(os.path.abspath(__file__)), "resources"))
)
