FROM node:16

WORKDIR /frontend
COPY package*.json ./
RUN npm install
RUN npm start
EXPOSE 3000

WORKDIR /server
COPY package*.json ./
RUN npm install
RUN node index.js
EXPOSE 4000


CMD ["node", "server.js"]



