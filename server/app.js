const { methods } = require('http');

const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.get('/test', (req, res) => {
  res.send(`<h1>I AM SOCKET</h1>`);
});

io.on('connection', (socket) => {
  //   console.log('connection', socket);

  socket.emit('chat', {
    message: 'I AM A MESSAGE. Hello and goodbye',
    user: 'The SOCKBOT',
  });

  socket.on('chat', (argh) => {
    console.log('inc chat', argh);
    io.emit('chat', argh);
  });
});

server.listen(3000);
