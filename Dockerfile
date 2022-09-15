FROM node:16

COPY . .

RUN npm install

EXPOSE 5001
CMD [ "node", "index.js" ]
