import uvicorn
from starlette.applications import Starlette
from starlette.routing import Route, Mount
from starlette.staticfiles import StaticFiles
from pyrostack import init_pyro, PyroTemplates


templates = PyroTemplates()


@templates.template("index.html")
async def root(request):
    return {"foo": "hello world"}


app = Starlette(routes=[
    Route("/", root)
])
init_pyro(app)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
