module.exports = (io, socket, users, rooms) => {
    socket.on('chat', ({ user, message, room }) => {
        if (rooms[room]) {
            io.to(room).emit('chatRoom', { user, message, room });
        } else {
            io.emit('chatGeneral', { user, message });
        }
    });
};