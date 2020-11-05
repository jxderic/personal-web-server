FROM node:12.19.0-buster-slim

WORKDIR /usr/src/app

COPY . .

RUN npm config set registry http://r.cnpmjs.org/
RUN npm cache clean --force
RUN npm i
# RUN npm run build

EXPOSE 3008
# CMD [ "npm", "run",  "start:prod"]
CMD [ "npm", "run",  "start:dev"]