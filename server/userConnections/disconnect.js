module.exports = (io, socket, users, rooms) => {
	socket.on('disconnect', function () {
		const username = users[socket.id];
		if (username) {
			Object.keys(rooms).forEach((roomId) => {
				if (rooms[roomId].includes(username)) {
					rooms[roomId] = rooms[roomId].filter((user) => user !== username);
					io.to(roomId).emit('updateRoom', rooms[roomId]);
				}
			});

			io.emit('chat', { message: `${username} har loggat ut`, user: 'Server' });
			delete users[socket.id];
		}
		io.emit('updateRooms', rooms);
    io.emit('chat', { message: `${username} har loggat ut`, user: 'Server' });
		io.emit('updateUserList', Object.values(users));
	});
};
