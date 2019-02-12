FROM node:11.9.0-alpine
WORKDIR /kkmessagebroker
COPY . /kkmessagebroker
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
        && npm install --only=production \
        && apk del .gyp
EXPOSE 3000 3001
CMD ["npm", "start"]
