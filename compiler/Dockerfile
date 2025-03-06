FROM gcc:latest

RUN apt-get update && apt-get install -y flex

COPY . /app

WORKDIR /app

RUN make