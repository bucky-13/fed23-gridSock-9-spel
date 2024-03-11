module.exports = (io, socket, users, rooms) => {
	socket.on('logout', (arg) => {
		Object.keys(rooms).forEach((roomId) => {
			if (rooms[roomId].includes(arg)) {
				rooms[roomId] = rooms[roomId].filter((user) => user !== arg);
				io.to(roomId).emit('updateRoom', rooms[roomId]);
			}
		});
		io.emit('updateRooms', rooms);
		io.emit('chat', { message: `${arg} har loggat ut`, user: 'Server' });
		io.emit('updateUserList', Object.values(users));
		delete users[socket.id];
	});
};
