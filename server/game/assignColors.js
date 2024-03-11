

module.exports = (io, socket, users, rooms, currentGameboardsUsed) => {

    socket.on('createNewGame', (data, roomId) => {
        // console.log(data.colors, 'data colors');
        console.log(currentGameboardsUsed);

        // console.log(rooms[roomId].length);

        // let index = 0;
        for (let i = 0; i < rooms[roomId].length; i++) {
            let username = rooms[roomId][i]
            let userSocketId = Object.keys(users).find(key => users[key] === username)
            // console.log(username + ' index');
            // console.log('socketuser ' + user);
            io.to(userSocketId).emit('newGameStart', `${data.colors[i]}`)
        }
     })
 }