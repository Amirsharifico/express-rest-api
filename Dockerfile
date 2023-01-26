
FROM node:18-alpine


RUN npm install -g nodemon


WORKDIR /app


COPY package.json .

RUN npm install

COPY . .


EXPOSE 3000

#Command to start the Docker container Node.js application
CMD ["npm", "run", "start"]