Message Broker
==============

Simple message broker that receives data from
[Komakallio Message Relay](https://github.com/komakallio/koma-message-relay)
and publishes it via Socket.io, so the data can be consumed with e.g. a web
application running in a browser.

The preferred way of starting the message broker is by using Docker.
You can execute the following to start the service:

```
docker-compose up -d
```

To run the message broker without Docker, run the following:
```
npm install
npm start
```
