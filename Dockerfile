FROM node:11.9.0-alpine as builder
WORKDIR /kkmessagebroker
COPY . /kkmessagebroker
RUN apk add --no-cache --virtual .gyp python make g++ \
RUN npm install --only=production

FROM node:11.9.0-alpine as app
COPY --from=builder node_modules .
EXPOSE 3000 3001
CMD ["npm", "start"]
