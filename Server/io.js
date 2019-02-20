const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = 3000;

io.listen(PORT);

module.exports = io;
