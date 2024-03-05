const { read } = require('fs');

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// IMPORTING MODULES 
const handleLogin = require('./userConnections/login')
const handleLogout = require('./userConnections/logout')
const handleDisconnect = require('./userConnections/disconnect')
const handleActivity = require('./userConnections/activity')
const handleChat = require('./chat/chat')
const handlePlayerReady = require('./game/playerReady')
const handlePlayerUnReady = require('./game/playersUnReady.js')
const { users, usersReady } = require('./lib/serverDatabase.js');


// probably not needed
app.get('/', (req,res) => {
    res.send("<h1>Socket at server at DigitalOcean</h1>")
})

// CONNECTION FUNCTION, CALL IMPORTED FUNCTIONS HERE. PASS IN ANY ARRAYS OR OBJECTS THEY NEED TO HANDLE
const onConnection = (socket) => {
handleLogin(io, socket, users, usersReady);
handleLogout(io, socket, users, usersReady);
handleChat(io, socket, users, usersReady);
handleActivity(io, socket, users, usersReady);
handleDisconnect(io, socket, users, usersReady);
handlePlayerReady(io, socket, users, usersReady);
handlePlayerUnReady(io, socket, users, usersReady);

}

// INITIATING THE CONNECTION FUNCTION
io.on('connection', onConnection);

server.listen(process.env.PORT || '3001'); // make sure it's the same as called in socket.io-client in main.js