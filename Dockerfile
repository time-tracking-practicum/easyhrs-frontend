FROM node as build
WORKDIR /frontend
COPY package.json .
RUN npm pkg delete scripts.prepare
RUN npm i --omit=dev
COPY . .
RUN npm run build