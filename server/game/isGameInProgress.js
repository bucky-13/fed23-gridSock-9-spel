

module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames, playersInGame) => {
    socket.on('isGameInProgress', (roomId) => {  
        if (rooms[roomId]) { 
            console.log(playersInGame[roomId]);
            if (playersInGame[roomId] > 0) {
                socket.emit('isRoomAvailable', 'no', playersInGame, roomId)
            } else {
                socket.emit('isRoomAvailable', 'yes', playersInGame, roomId)
            }
        }
    })

    socket.on('endGameAndReturnToLobby', (roomId) => {
        console.log('I should also happen alot');
        if (rooms[roomId]) {
            console.log('i should happen' + roomId);
            playersInGame[roomId]--;
            console.log(playersInGame[roomId]);
        }
        if (playersInGame[roomId] < 0) {
            playersInGame[roomId] = 0;
        }

    })
    socket.on('gameHasStarted', (roomId) => {
        if (rooms[roomId]) {
            playersInGame[roomId] = 4
            console.log(playersInGame);
        }
    })
 }