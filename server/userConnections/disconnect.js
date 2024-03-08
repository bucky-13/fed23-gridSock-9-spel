module.exports = (io, socket, users, rooms) => { 
        socket.on('disconnect', function () {
          const username = users[socket.id];
          if (username) {
            
            io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});
            delete users[socket.id];
            delete usersReady[socket.id];
          }

                // delete usersReady[socket.id];

    //   if (username && username in rooms) {
    //     const roomId = rooms[username];
    //     rooms[username] = rooms[username].filter(user => user !== username);
    //     socket.leave(roomId);
    //     console.log(roomId, username);
    //     io.to(roomId).emit('updateRooms', rooms[roomId]);
    // }

  //   if (username && rooms[username]) {
  //     const roomId = rooms[username];
  //     rooms[roomId] = rooms[roomId].filter(user => user !== username);
  //     socket.leave(roomId);
  //     console.log(roomId, username);
  //     io.to(roomId).emit('updateRooms', rooms[roomId]);
  // }
        io.emit('updateUserList', Object.values(users));
        // io.emit('updatePlayerReady', Object.values(usersReady));
        io.emit('chat', { message: `${username} har loggat ut`, user: "Server"});

    });
}