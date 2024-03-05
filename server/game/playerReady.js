module.exports = (io, socket, users, usersReady) => { 

        socket.on('playerReady', (username) => {
        // delete usersReady[socket.id]
        console.log(usersReady);
        usersReady[socket.id] = username;
        io.emit('updatePlayerReady', Object.values(usersReady));
    })
}