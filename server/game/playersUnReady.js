module.exports = (io, socket, users, usersReady) => { 

    socket.on('playerUnReady', (username) => {
        console.log(usersReady);
        // if (Object.values(usersReady).includes(username)) {
            for (const i in usersReady) {
                if (usersReady[i] === username) {
                    delete usersReady[i];
                }
            }
            console.log(`Removed ${username} from usersReady`);
        // } else {
        //     console.log('Player not in lobby');
        // }
        io.emit('playerReady', Object.values(usersReady));

    });
};