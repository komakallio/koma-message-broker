const zmq = require('zeromq');
const io = require('socket.io');

const clients = io.listen(3001, { path: '/' });

/* Wait for connection from Komakallio ZeroMQ relay */
const subSocket = zmq.socket('sub');
subSocket.bindSync('tcp://*:3000');
subSocket.subscribe('');

/* Forward messages coming from ZeroMQ to Socket.IO */
subSocket.on('message', (topic, message) => {
  clients.sockets.emit('msg', topic.toString(), message.toString());
});
