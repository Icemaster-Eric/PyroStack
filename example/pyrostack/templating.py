from typing import Sequence, Tuple, Callable
import os, posixpath
from lxml import html, etree
from jinja2 import Environment, FileSystemLoader, select_autoescape, TemplateNotFound
from jinja2.loaders import split_template_path
from fastapi.responses import HTMLResponse


class PyroLoader(FileSystemLoader):
    def get_source(
        self, environment: "Environment", template: str
    ) -> Tuple[str, str, Callable[[], bool]]:
        pieces = split_template_path(template)

        for searchpath in self.searchpath:
            # Use posixpath even on Windows to avoid "drive:" or UNC
            # segments breaking out of the search directory.
            filename = posixpath.join(searchpath, *pieces)

            if os.path.isfile(filename):
                break
        else:
            raise TemplateNotFound(template)

        with open(filename, encoding=self.encoding) as f:
            tree = html.parse(f)

        head = tree.find(".//head")

        if head is not None:
            # Append the script tag to the head
            head.append(etree.Element(
                "script",
                src="pyrostack-resources/js/htmx.min.js",
                defer="defer"
            ))
            head.append(etree.Element(
                "link",
                rel="stylesheet",
                href="pyrostack-resources/css/pico.min.css"
            ))

        contents = etree.tostring(tree, encoding="unicode", method="html")

        mtime = os.path.getmtime(filename)

        def uptodate() -> bool:
            try:
                return os.path.getmtime(filename) == mtime
            except OSError:
                return False

        # Use normpath to convert Windows altsep to sep.
        return contents, os.path.normpath(filename), uptodate


class PyroTemplates: # turn this into generic way to return pyrostack html responses (optimize later)
    def __init__(
            self,
            directory: str | os.PathLike[str] | Sequence[str | os.PathLike[str]] = "templates",
            **env_options
    ):
        self.env = Environment(
            loader=PyroLoader(directory),
            autoescape=select_autoescape(),
            **env_options
        )

    def render(self, name: str, context: dict): # add more configuration options (?)
        template = self.env.get_template(name)
        rendered_html = template.render(context)

        return HTMLResponse(rendered_html)
