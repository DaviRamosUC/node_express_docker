FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN chown -R node:node /app/node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]