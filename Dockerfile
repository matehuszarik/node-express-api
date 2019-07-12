FROM node:12.6.0

ENV NODE_ENV production
ENV PROCESS_TYPE web

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]