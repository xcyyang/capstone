FROM nikolaik/python-nodejs:python3.9-nodejs16
COPY . /app
WORKDIR /app
RUN pip install .
