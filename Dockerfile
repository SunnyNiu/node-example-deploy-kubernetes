FROM node:8.5.0-slim

RUN mkdir -p /node-example
COPY index.js /node-example
COPY package.json /node-example
COPY yarn.lock /node-example

WORKDIR /node-example
RUN yarn

CMD ["node","index.js"]