module.exports = (io, socket, users, usersReady) => {
    socket.on('chat', (arg) => {
        io.emit('chat', arg);
    })}