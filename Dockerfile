FROM node:alpine

WORKDIR /usr

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
