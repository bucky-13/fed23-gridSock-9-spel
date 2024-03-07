module.exports = (io, socket, users, usersReady) => { 
        socket.on('disconnect', function () {
          const username = users[socket.id];
          if (username) {
            
            io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});
            delete users[socket.id];
            delete usersReady[socket.id];
          }

        io.emit('updateUserList', Object.values(users));
        io.emit('updatePlayerReady', Object.values(usersReady));

    });
}