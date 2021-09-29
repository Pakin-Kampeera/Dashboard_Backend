FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 2000

CMD ["yarn", "start"]