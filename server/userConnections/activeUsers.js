module.exports = (io, socket, users, usersReady) => { 

    socket.on('activeUsers', (arg) => {
        
        socket.emit(arg, users)
    })
}