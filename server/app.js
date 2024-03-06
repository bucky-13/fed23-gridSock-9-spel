const { read } = require('fs');

let app = require('express')();
let express = require('express')
const server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// IMPORT OF ROUTERS
let usersRouter = require('./routes/users.js')

// SETUP FOR DATABASE CONFIGS
require('dotenv').config();
const mysql = require('mysql2')

app.locals.con = mysql.createConnection({
  host: process.env.SQL_IP,
  port: process.env.SQL_PORT,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
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

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/users', usersRouter)

// gets a response from digital ocean with a test database
app.get('/', (req,res) => {
     req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    // GET all in test collection
    let sql = `SELECT * FROM test3`;

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }

      // Converts to normal arrays, use on colors and players
        let players = result[0].players.split(',')
        let colors = result[0].colors.split(',')

        // First conversion of 2 dimensional array into one long array with strings
        let grid1dString = result[0].grid.split(',')
        // Changes the strings in the 2d array into numbers (int)
        let grid1dInt = grid1dString.map(function (str) {
            return parseInt(str);
        })

        // This is the final version of the 2 dimensional array
        let grid = [];
        // This is each row that gets inserted
        let gridColumns = [];

        // Loops over the entire grid array to turn it into a 2d array again
        for (let i = 0; i < grid1dInt.length; i++) {
            
            gridColumns.push(grid1dInt[i])

            // When each row have X amount of entries, it gets pushed to grid and empties so a new row can be created
            if (gridColumns.length >= result[0].gridColumns) {
                grid.push(gridColumns);
                gridColumns = [];
            }
      }

      let currentGameboard = {
        id: result[0].testId,
        gridColumns: result[0].gridColumns,
        players: players,
        colors: colors,
        grid: grid
      };
 

      

      res.json(currentGameboard);
    });
  });
})

app.post('/', function (req, res, next) {
  req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }
      // let sqlQuery = `INSERT INTO test2 (array) VALUES ("${gameboard1.colors}")`;

      let sqlQuery = `INSERT INTO test3 (gridColumns, players, colors, grid) VALUES ("${gameboard1.gridColumns}", "${gameboard1.players}", "${gameboard1.colors}", "${gameboard1.grid}")`;

    req.app.locals.con.query(sqlQuery, function (err, result) {
      if (err) {
        console.log(err);
        }
         res.json(result);
    });
  });
});

let gameboard1 = {
    id: 1,
    gridColumns: 15,
    players: [1,2,3,4],
    colors: ['green', 'blue', 'white', 'red'],
    grid: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    ]
}

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