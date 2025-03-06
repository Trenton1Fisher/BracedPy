FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN apk update && apk add --no-cache make gcc libc-dev flex

ENV SERVER_PORT=${SERVER_PORT} \
    ALLOWED_HOSTS=${ALLOWED_HOSTS}

CMD ["npm", "run", "build"]
