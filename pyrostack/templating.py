from typing import Sequence, Tuple, Callable
import os, posixpath
from lxml import html, etree
from jinja2 import Environment, FileSystemLoader, select_autoescape, TemplateNotFound
from jinja2.loaders import split_template_path
from starlette.responses import HTMLResponse


shoelace_components = [
    "sl-" + tag_name for tag_name in [
        "alert", "animated-image", "animation", "avatar", "badge", "breadcrumb",
        "breadcrumb-item", "button", "button-group", "card", "carousel", "carousel-item",
        "checkbox", "color-picker", "copy-button", "details", "dialog", "divider", "drawer",
        "dropdown", "format-bytes", "format-date", "format-number", "icon", "icon-button",
        "image-comparer", "include", "input", "menu", "menu-item", "menu-label",
        "mutation-observer", "option", "popup", "progress-bar", "progress-ring", "qr-code",
        "radio", "radio-button", "radio-group", "range", "rating", "relative-time",
        "resize-observer", "select", "skeleton", "spinner", "split-panel", "switch", "tab",
        "tab-group", "tab-panel", "tag", "textarea", "tooltip", "tree", "tree-item",
        "visually-hidden"
    ]
]

xpath_expr = "|".join(f"//{component}" for component in shoelace_components)


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
            # TODO: Add option to avoid inserting specific libs
            # Add required css/js

            # figure out which shoelace components to import
            found_elements = tree.xpath(xpath_expr)
            found_tags = {elem.tag for elem in found_elements}
            found_components = [tag[3:] for tag in shoelace_components if tag in found_tags]

            if found_components:
                # insert shoelace css
                head.append(etree.Element(
                    "link",
                    rel="stylesheet",
                    media="(prefers-color-scheme:light)",
                    href="pyrostack-resources/css/shoelace/themes/light.css"
                ))
                head.append(etree.Element(
                    "link",
                    rel="stylesheet",
                    media="(prefers-color-scheme:dark)",
                    href="pyrostack-resources/css/shoelace/themes/dark.css",
                    onload="document.documentElement.classList.add('sl-theme-dark');"
                ))

                # insert shoelace component js
                shoelace_tag = etree.Element(
                    "script",
                    type="module",
                    **{"data-shoelace": "/pyrostack-resources/css/shoelace/"}
                )
                shoelace_tag.text = ";\n".join(
                    [f"import '/pyrostack-resources/css/shoelace/components/{i}/{i}.js'" for i in found_components]
                ) + ";"
                head.append(shoelace_tag)

            head.append(etree.Element(
                "script",
                src="pyrostack-resources/js/htmx.min.js",
                defer="defer"
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
