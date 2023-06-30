FROM node
WORKDIR /frontend
COPY package.json .
RUN npm pkg delete scripts.prepare
RUN npm i --omit=dev
COPY . .