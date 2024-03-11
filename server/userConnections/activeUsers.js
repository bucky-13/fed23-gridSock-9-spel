module.exports = (io, socket, users, rooms) => { 

    socket.on('activeUsers', (arg) => {
        
        socket.emit(arg, users)
    })
}