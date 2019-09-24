FROM node:10

WORKDIR /frontend-service

COPY . .

RUN yarn install --pure-lockfile

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
