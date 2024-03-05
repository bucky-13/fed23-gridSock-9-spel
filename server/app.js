const { read } = require('fs');

const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

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
const { users, usersReady } = require('./lib/serverDatabase.js');

app.use(cors());

// gets a response from digital ocean with a test database
app.get('/', (req,res) => {
    // res.send("<h1>Socket at server at DigitalOcean</h1>")
     req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
    }

    // GET all notes from a specific user
    let sql = `SELECT * FROM test`;

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  });
})

// CONNECTION FUNCTION, CALL IMPORTED FUNCTIONS HERE. PASS IN ANY ARRAYS OR OBJECTS THEY NEED TO HANDLE
const onConnection = (socket) => {
handleLogin(io, socket, users, usersReady);
handleLogout(io, socket, users, usersReady);
handleChat(io, socket, users, usersReady);
handleActivity(io, socket, users, usersReady);
handleDisconnect(io, socket, users, usersReady);
handlePlayerReady(io, socket, users, usersReady);
    
}

// INITIATING THE CONNECTION FUNCTION
io.on('connection', onConnection);

server.listen(process.env.PORT || '3001'); // make sure it's the same as called in socket.io-client in main.js