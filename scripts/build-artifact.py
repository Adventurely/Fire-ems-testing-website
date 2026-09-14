#!/usr/bin/env python3
"""Build the artifact package from the site source.

Claude Artifacts wrap the main page in their own <!doctype>/<head>/<body>
skeleton, so index.html ships as content only with its title and stylesheet
link hoisted to the top. Every other page is already a complete standalone
document and is copied unchanged.

Usage: python3 scripts/build-artifact.py [output_dir]
"""
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "build")

PAGES = ["quiz.html", "flashcards.html", "skills.html", "videos.html"]


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(os.path.join(OUT, "css"))
    os.makedirs(os.path.join(OUT, "js", "data"))

    src = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    title = re.search(r"<title>(.*?)</title>", src).group(1)
    body = re.search(r"<body>(.*)</body>", src, re.S).group(1)
    page = '<title>%s</title>\n<link rel="stylesheet" href="css/styles.css">\n%s\n' % (
        title, body.strip())
    open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(page)

    for name in PAGES:
        shutil.copy(os.path.join(ROOT, name), os.path.join(OUT, name))
    shutil.copy(os.path.join(ROOT, "css", "styles.css"),
                os.path.join(OUT, "css", "styles.css"))
    for sub in ("js", os.path.join("js", "data")):
        for name in sorted(os.listdir(os.path.join(ROOT, sub))):
            if name.endswith(".js"):
                shutil.copy(os.path.join(ROOT, sub, name),
                            os.path.join(OUT, sub, name))

    count = sum(len(f) for _, _, f in os.walk(OUT))
    print("built %d files into %s" % (count, OUT))


if __name__ == "__main__":
    main()
