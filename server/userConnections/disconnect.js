module.exports = (io, socket, users, usersReady) => { 
        socket.on('disconnect', function () {
        const username = users[socket.id];
      io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});
      delete users[socket.id];
        io.emit('updateUserList', Object.values(users));
    });
}