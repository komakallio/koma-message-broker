FROM node:11.9.0-alpine as builder
RUN apk add --no-cache --virtual .gyp python make g++
COPY package*.json ./
RUN npm install --only=production

FROM node:11.9.0-alpine as app
WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules
COPY . .
EXPOSE 3000 3001
CMD ["npm", "start"]
