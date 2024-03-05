module.exports = (io, socket, users, usersReady) => { 

    socket.on('playerReady', (username) => {

        if (Object.values(usersReady).includes(username)) {
            for (const i in usersReady) {
                if (usersReady[i] === username) {
                    delete usersReady[i];
                }
            }
            console.log(`Removed ${username} from usersReady`);
        } else {
            if (Object.values(usersReady).length < 2) {
                usersReady[socket.id] = username;
                console.log(`Added ${username} to usersReady`);
            } else {
                console.log('Maximum amount of players in lobby');
                return;
            }
        }
        io.emit('updatePlayerReady', Object.values(usersReady));
    });
};