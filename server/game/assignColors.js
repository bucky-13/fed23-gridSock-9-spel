module.exports = (io, socket, users, rooms, currentGameboardsUsed) => {

    socket.on('createNewGame', (data, roomId) => {

        for (let i = 0; i < rooms[roomId].length; i++) {
            let username = rooms[roomId][i]
            let userSocketId = Object.keys(users).find(key => users[key] === username)
            io.to(userSocketId).emit('newGameStart', `${data.colors[i]}`)
        }
     })
 }