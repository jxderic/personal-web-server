FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build

EXPOSE 3008
CMD [ "npm", "run",  "start:prod"]