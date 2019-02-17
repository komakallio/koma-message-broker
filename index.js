const zmq = require('zeromq');
const io = require('socket.io');

const clients = io.listen(3001, { path: '/' });

/* Wait for connection from Komakallio ZeroMQ relay */
const subSocket = zmq.socket('sub');
subSocket.bindSync('tcp://*:3000');
subSocket.subscribe('');

/* Forward messages coming from ZeroMQ to Socket.IO */
subSocket.on('message', (topic, message) => {
  const invalidTopic = topic == null;
  const invalidMessage = message == null;
  if (invalidTopic || invalidMessage) {
    console.log('Invalid data detected!');
    console.log(`Topic: ${invalidTopic ? 'null or undefined' : topic}`);
    console.log(`Message: ${invalidMessage ? 'null or undefined' : message}`);
    return;
  }
  clients.sockets.emit('msg', topic.toString(), message.toString());
});
