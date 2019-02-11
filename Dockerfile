FROM node:11.9.0-alpine
WORKDIR /kkmessagebroker
COPY . /kkmessagebroker
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]
