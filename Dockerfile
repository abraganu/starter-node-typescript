FROM node:14-stretch-slim

RUN apt-get -qy update && apt-get -qy install openssl python build-essential

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY . .

RUN ["npm", "run", "ts-compile"]

RUN ["npx", "prisma", "generate"]

CMD ["npm", "run", "start"]