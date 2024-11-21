import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles


resources_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "resources")


def init(app: FastAPI):
    app.mount("/pyrostack-resources", StaticFiles(directory=resources_dir), name="pyrostack-resources")
