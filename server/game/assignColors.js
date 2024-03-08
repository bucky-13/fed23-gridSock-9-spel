module.exports = (io, socket, users, usersReady) => {

    socket.on('startNewGame', () => {

        io.emit('newGameStart', 'THIS IS A NEW GAME OMFGZ');
     })
 }