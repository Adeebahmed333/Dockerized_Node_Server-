FROM node:latest

WORKDIR /usr/adeeb/dockerExampleWithNode

COPY . .

RUN npm install

EXPOSE 3001

CMD node server.js