module.exports = (io, socket, users, usersReady) => { 

    socket.on('activeUsers', () => {
        socket.emit('sendActiveUsers', users)
    })
}