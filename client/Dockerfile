FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_SERVER_URL=${VITE_SERVER_URL}

CMD ["npm", "run", "build"]
