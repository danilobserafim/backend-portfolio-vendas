FROM node
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run postinstall

CMD [ "npm", "start"]