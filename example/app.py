import uvicorn
from fastapi import FastAPI, Request, Response
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pyrostack import init, PyroTemplates


app = FastAPI()

init(app)

templates = PyroTemplates()


@app.get("/")
async def root(request: Request) -> HTMLResponse:
    return templates.render(
        "index.html",
        {}
    )


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
