"""
Small script to minify css/js for shoelace
"""
import os
from rcssmin import cssmin
from rjsmin import jsmin


shoelace_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "resources", "css", "shoelace")

for dirpath, dirnames, filenames in os.walk(shoelace_dir):
    for file in filenames:
        if file.endswith(".js"):
            with open(os.path.join(dirpath, file), "r") as f:
                raw_js = f.read()

            min_js = jsmin(raw_js)

            with open(os.path.join(dirpath, file), "w") as f:
                f.write(min_js)

        elif file.endswith(".css"):
            with open(os.path.join(dirpath, file), "r") as f:
                raw_css = f.read()

            min_css = cssmin(raw_css)

            with open(os.path.join(dirpath, file), "w") as f:
                f.write(min_css)

        elif file.endswith(".ts"):
            os.remove(os.path.join(dirpath, file))
