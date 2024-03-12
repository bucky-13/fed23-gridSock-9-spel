module.exports = (io, socket, users, rooms) => { 
    socket.on('activity', (username, room) => {
        users[socket.id] = username;

        if (room === 'general') {
            io.to(room).emit('activityGeneral', { username }); 
            console.log('General');
        } else if (rooms[room]) { 
            io.to(room).emit('activityRoom', { username });
            console.log('RoomSpecific');
        }
    });
};