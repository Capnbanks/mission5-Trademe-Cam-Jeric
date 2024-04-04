FROM node:20.10.0 
# was node:20.9.0 before change incase there's problems
# Dockerfile for api
RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start"]