module.exports = (io, socket, users, rooms) => { 
    socket.on('activity', (username, room) => {
        users[socket.id] = username;

        if (room == 'general') {
            socket.broadcast.emit('activityGeneral', { username }); 
            console.log('General');
        } else if (room != 'general') { 
            socket.broadcast.emit('activityRoom', { username });
            console.log('RoomSpecific');
        }
    });
};