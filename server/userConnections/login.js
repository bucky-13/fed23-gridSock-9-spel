module.exports = (io, socket, users, usersReady) => {
socket.on('login', (username) => {
        users[socket.id] = username;
        socket.broadcast.emit('chatGeneral', { message: `${username} has joined the chat`, user: 'Server' }); //Meddelandet om inloggad användare kommer inte till en själv
        socket.emit('chatGeneral',{ message: `Welcome ${username} please be respectful and follow the guidelines`, user: 'Server' }); //Skriver ett meddelande enbart till användare som joinat
        io.emit('updateUserList', Object.values(users));
        io.emit('updatePlayerReady', Object.values(usersReady));

    })

}