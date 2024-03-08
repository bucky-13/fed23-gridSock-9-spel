module.exports = (io, socket, users, usersReady) => {

    socket.on('createNewGame', (data) => {
        console.log(data.colors);
        console.log(usersReady);
        let index = 0;
        for (const user in usersReady) {
            console.log(user);

            io.to(user).emit('newGameStart', `${data.colors[index]}`);
            console.log(`${usersReady[user]}`);
            index++;
        }

        // io.emit('newGameStart', data.colors);
     })
 }