FROM python:3.7-alpine
COPY . /app
WORKDIR /app
RUN pip install .
CMD ["web3_exploit_framework"]
