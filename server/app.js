const app = require('express')();
const server = require('http').createServer(app);


const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const users = {}; // ett objekt för att lagra användare


app.get('/', (req,res) => {
    res.send("<h1>Socket at server at DigitalOcean</h1>")
})

io.on('connection', (socket) => {
    socket.on('login', (username) => {
        users[socket.id] = username;
        io.emit('chat', { message: `${username} har anslutit`, user: 'Server' });
        io.emit('updateUserList', Object.values(users));
    })
    socket.on('logout', () => {
        const username = users[socket.id];
        io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});
        io.emit('updateUserList', Object.values(users));
        delete users[socket.id];
    })

    socket.on('disconnect', function () {
        const username = users[socket.id];
        
      io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});
      delete users[socket.id];
        io.emit('updateUserList', Object.values(users));
    });
    
    socket.on('chat', (arg) => {
        io.emit('chat', arg);
    })

})


server.listen(process.env.PORT || '3001'); // make sure it's the same as called in socket.io-client in main.js