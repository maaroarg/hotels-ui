FROM node:6.9

RUN apt-get update

COPY . /usr/src/app/

WORKDIR /usr/src/app

RUN rm -rf node_modules/

RUN npm install

EXPOSE 8080

CMD npm run start
