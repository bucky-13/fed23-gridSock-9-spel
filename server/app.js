const { read } = require('fs');

let app = require('express')();
let express = require('express');
const server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
const cors = require('cors');
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

// IMPORT OF ROUTERS
let usersRouter = require('./routes/users.js')
let gameRouter = require('./routes/game.js')

// SETUP FOR DATABASE CONFIGS
require('dotenv').config();
const mysql = require('mysql2');

app.locals.con = mysql.createConnection({
	host: process.env.SQL_IP,
	port: process.env.SQL_PORT,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DATABASE,
});

// IMPORTING MODULES
const handleLogin = require('./userConnections/login');
const handleLogout = require('./userConnections/logout');
const handleDisconnect = require('./userConnections/disconnect');
const handleActivity = require('./userConnections/activity');
const handleActiveUsers = require('./userConnections/activeUsers.js');
const handleChat = require('./chat/chat');
const handlePlayerReady = require('./game/playerReady.js');
const handlePlayerUnReady = require('./game/playersUnReady.js');
const handleJoinRoom = require('./game/joinRoom.js');
const handleLeaveRoom = require('./game/leaveRoom.js');
const handleGetRooms = require('./game/getRooms.js');
const assignColors = require('./game/assignColors.js')
const sendCurrentGameboardUsed = require('./game/sendCurrentGameboardUsed.js')
const generateActiveGame = require('./game/generateActiveGame.js')

const { users, rooms, currentGameboardsUsed, activeGames } = require('./lib/serverDatabase.js');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/users', usersRouter);
app.use('/randomGame', gameRouter);



// CONNECTION FUNCTION, CALL IMPORTED FUNCTIONS HERE. PASS IN ANY ARRAYS OR OBJECTS THEY NEED TO HANDLE
const onConnection = (socket) => {
	handleLogin(io, socket, users, rooms);
	handleLogout(io, socket, users, rooms);
	handleChat(io, socket, users, rooms);
	handleActivity(io, socket, users, rooms);
	handleDisconnect(io, socket, users, rooms);
	handlePlayerReady(io, socket, users, rooms);
	handlePlayerUnReady(io, socket, users, rooms);
	handleGetRooms(io, socket, rooms);
	handleJoinRoom(io, socket, users, rooms);
	handleLeaveRoom(io, socket, users, rooms);
	handleActiveUsers(io, socket, users, rooms);
	assignColors(io, socket, users, rooms, currentGameboardsUsed);
	sendCurrentGameboardUsed(io, socket, users, rooms, currentGameboardsUsed);
	generateActiveGame(io, socket, users, rooms, currentGameboardsUsed, activeGames);
};

// INITIATING THE CONNECTION FUNCTION
io.on('connection', onConnection);

server.listen(process.env.PORT || '3001'); // make sure it's the same as called in socket.io-client in main.js
