FROM node:20.10.0
# was node:20.9.0 before fix
# Trademe dockerfile
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]