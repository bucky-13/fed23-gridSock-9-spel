// module.exports = (io, socket, rooms) => { 

//     socket.on('joinRoom', ({username, roomId}) => {

//         if (rooms[roomId].includes(username)) { 

//             console.log(`User already in the room`);
//         } else {
//             rooms[roomId].push(username); 
//             socket.join(roomId);
//             console.log(`${username} has joined room ${roomId}`);
//             io.to(roomId).emit('updateRooms', rooms[roomId])
//         }
//         console.log(rooms[roomId]);
//     });
    
// };


module.exports = (io, socket,users, rooms) => {
    // const updateRooms = (roomId) => {
    // };

    socket.on('joinRoom', ({ username, roomId }) => {
        users[socket.id] = username;
        if (rooms[roomId].includes(username)) {
            console.log(`User already in the room`);
        } else {
            rooms[roomId].push(username);
            socket.join(roomId);
            console.log(`${username} has joined room ${roomId}`);
            io.to(roomId).emit('updateRooms', rooms[roomId]);
        }
        console.log(rooms[roomId]);
    });
};