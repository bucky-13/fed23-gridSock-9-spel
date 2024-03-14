module.exports = (io, socket, users, rooms, playersInGame) => {
	socket.on('disconnect', function () {
		const username = users[socket.id];
		if (username) {
			Object.keys(rooms).forEach((roomId) => {
				if (rooms[roomId].includes(username)) {
					playersInGame[roomId]--;
					rooms[roomId] = rooms[roomId].filter((user) => user !== username);
					io.to(roomId).emit('updateRoom', rooms[roomId]);
				}
			});

			io.emit('chatGeneral', { message: `${username} har loggat ut`, user: 'Server' });
			delete users[socket.id];
		}
		io.emit('updateRooms', rooms);
    	io.emit('chatGeneral', { message: `${username} har loggat ut`, user: 'Server' });
		io.emit('updateUserList', Object.values(users));
	});
};
