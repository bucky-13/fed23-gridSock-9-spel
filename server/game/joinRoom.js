module.exports = (io, socket,users, rooms) => {

    socket.on('joinRoom', ({ username, roomId }) => {
        users[socket.id] = username;
        console.log(username);
        if (rooms[roomId].includes(username)) {
            console.log(`User already in the room`);
        } else {
            rooms[roomId].push(username);
            socket.join(roomId);
            console.log(`${username} has joined room ${roomId}`);
            io.to(roomId).emit('updateRooms', rooms);
        }
        console.log(rooms[roomId]);
    });
};