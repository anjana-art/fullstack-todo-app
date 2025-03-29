FROM node:18.20.7

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY .  .

RUN apt-get update && apt-get install -y curl # Install curl


EXPOSE 3000

CMD ["npm", "start"]