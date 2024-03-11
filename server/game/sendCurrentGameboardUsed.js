let playersReady = {
    animals: 0,
    fruits: 0,
    random: 0
};

module.exports = (io, socket, users, rooms, currentGameboardsUsed) => { 
    socket.on('sendCurrentGameboardUsed', (roomId) => { 
        playersReady[roomId]++;


        // CHANGE 2 INTO 4 WHEN DEPLOYING ------------IMPORTANT!
        if (playersReady[roomId] >= 2) {
            let gameboardOfArgh = currentGameboardsUsed[roomId]
            io.emit('recieveCurrentGameboardUsed', gameboardOfArgh)
        }
        

    })

}