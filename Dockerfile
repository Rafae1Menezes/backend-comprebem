FROM node:18.17.1

WORKDIR /usr/app

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]