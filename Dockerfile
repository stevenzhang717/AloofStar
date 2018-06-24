FROM node:9

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn
ADD . .

CMD [ "yarn", "start" ]
