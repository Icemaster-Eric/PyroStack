import uvicorn
from starlette.applications import Starlette
from starlette.routing import Route, Mount
from starlette.staticfiles import StaticFiles
from pyrostack import pyro_resources_route, PyroTemplates

templates = PyroTemplates()


async def root(request):
    return templates.render("index.html", {})


app = Starlette(routes=[
    Route("/", root),
    pyro_resources_route
])


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
