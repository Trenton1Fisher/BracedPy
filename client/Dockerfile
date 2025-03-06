FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV SERVER_URL=${SERVER_URL}

CMD ["npm", "run", "build"]
