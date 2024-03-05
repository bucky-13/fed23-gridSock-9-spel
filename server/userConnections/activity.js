module.exports = (io, socket, users, usersReady) => { 
    
    socket.on('activity', (username) => {
        users[socket.id] = username;
        if (username) {
            socket.broadcast.emit('activity', { username });
        } 
    });

}