"""Python setup.py for web3_exploit_framework package"""
import io
import os
from setuptools import find_packages, setup


def read(*paths, **kwargs):
    """Read the contents of a text file safely.
    >>> read("web3_exploit_framework", "VERSION")
    '0.1.0'
    >>> read("README.md")
    ...
    """

    content = ""
    with io.open(
        os.path.join(os.path.dirname(__file__), *paths),
        encoding=kwargs.get("encoding", "utf8"),
    ) as open_file:
        content = open_file.read().strip()
    return content


def read_requirements(path):
    return [
        line.strip()
        for line in read(path).split("\n")
        if not line.startswith(('"', "#", "-", "git+"))
    ]


setup(
    name="web3_exploit_framework",
    version=read("web3_exploit_framework", "VERSION"),
    description="Awesome web3_exploit_framework created by xcyyang",
    url="https://github.com/xcyyang/web3-exploit-framework/",
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    author="xcyyang",
    packages=find_packages(exclude=["tests", ".github"]),
    install_requires=read_requirements("requirements.txt"),
    include_package_data=True,
    entry_points={
        "console_scripts": ["web3_exploit_framework = web3_exploit_framework.__main__:main"]
    },
    extras_require={"test": read_requirements("requirements-test.txt")},
)
