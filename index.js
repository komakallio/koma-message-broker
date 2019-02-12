const zmq = require('zeromq');
const io = require('socket.io');

const pubSocket = io.listen(3001, { path: '/' });

/* Wait for connection from Komakallio ZeroMQ relay */
const subSocket = zmq.socket('sub');
subSocket.bindSync('tcp://*:3000');
subSocket.subscribe('');

/* Publish all ZeroMQ messages with topic to corresponding Socket.io room */
subSocket.on('message', (topic, message) => {
  pubSocket.to(topic).emit('msg', message);
});
