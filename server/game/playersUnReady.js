module.exports = (io, socket, users, usersReady) => { 

    socket.on('playerUnReady', (username) => {

        if (Object.values(usersReady).includes(username)) {
            for (const i in usersReady) {
                if (usersReady[i] === username) {
                    delete usersReady[i];
                }
            }
            console.log(`Removed ${username} from usersReady`);
        } else {
            console.log('Player not in lobby');
        }
        io.emit('removePlayerReady', Object.values(usersReady));
    });
};