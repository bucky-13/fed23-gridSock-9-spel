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

const { users, rooms, currentGameBoards } = require('./lib/serverDatabase.js');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/users', usersRouter);
app.use('/randomGame', gameRouter);

// gets a response from digital ocean with a test database
/*
app.get('/randomGame', (req,res) => {
     req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
       }
       
       // Which board to get, 1-5 exists
        let id = 3;

    // GET all in test collection
      let sql = `SELECT * FROM gameboards WHERE boardId = ${id}`;

		// GET all in test collection
		let sql = `SELECT * FROM gameboards WHERE boardId="${id}"`;

		req.app.locals.con.query(sql, function (err, result) {
			if (err) {
				console.log(err);
			}

			// Converts to normal arrays, use on colors and players
			let colors = result[0].colors.split(',');

			// First conversion of 2 dimensional array into one long array with strings
			let grid1dString = result[0].grid.split(',');
			// Changes the strings in the 2d array into numbers (int)
			let grid1dInt = grid1dString.map(function (str) {
				return parseInt(str);
			});

			// This is the final version of the 2 dimensional array
			let grid = [];
			// This is each row that gets inserted
			let gridColumns = [];

			// Loops over the entire grid array to turn it into a 2d array again
			for (let i = 0; i < grid1dInt.length; i++) {
				gridColumns.push(grid1dInt[i]);

				// When each row have X amount of entries, it gets pushed to grid and empties so a new row can be created
				if (gridColumns.length >= result[0].gridColumns) {
					grid.push(gridColumns);
					gridColumns = [];
				}
			}

			let currentGameboard = {
				boardId: result[0].boardId,
				gridColumns: result[0].gridColumns,
				name: result[0].name,
				description: result[0].description,
				colors: colors,
				grid: grid,
			};

*/
// SOCKET ROOMS

// app.post('/', function (req, res, next) {
//   req.app.locals.con.connect(function (err) {
//     if (err) {
//       console.log(err);
//     }
//       // let sqlQuery = `INSERT INTO test2 (array) VALUES ("${gameboard1.colors}")`;

//       let sqlQuery = `INSERT INTO gameboards (gridColumns, name, description, colors, grid) VALUES (${gameboard1.gridColumns}, "${gameboard1.name}", "${gameboard1.description}", "${gameboard1.colors}", "${gameboard1.grid}")`;

//     req.app.locals.con.query(sqlQuery, function (err, result) {
//       if (err) {
//         console.log(err);
//         }
//          res.json(result);
//     });
//   });
// });

// let gameboard1 = {}

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
};

// INITIATING THE CONNECTION FUNCTION
io.on('connection', onConnection);

server.listen(process.env.PORT || '3001'); // make sure it's the same as called in socket.io-client in main.js
