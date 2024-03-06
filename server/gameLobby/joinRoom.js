module.exports = (io, socket, rooms) => { 

    socket.on('joinRoom', ({username, roomId}) => {

        if (rooms[roomId].includes(username)) { 

            console.log(`User already in the room`);
        } else {
            rooms[roomId].push(username); 
            socket.join(roomId);
            console.log(`${username} has joined room ${roomId}`);
            io.to(roomId).emit('updateRooms', rooms[roomId])
        }
        console.log(rooms[roomId]);
    });
};