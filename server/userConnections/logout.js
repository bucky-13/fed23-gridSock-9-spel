module.exports = (io, socket, users, usersReady) => { 
        socket.on('logout', () => {
        const username = users[socket.id];
        io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});
        io.emit('updateUserList', Object.values(users));
        delete users[socket.id];
        delete usersReady[socket.id];
        io.emit('updatePlayerReady', Object.values(usersReady));

    })
}