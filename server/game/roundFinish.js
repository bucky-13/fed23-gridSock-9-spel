module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
        socket.on('roundFinished', (roomId) => {
            io.to(roomId).emit('roundFinished');
        });
    };