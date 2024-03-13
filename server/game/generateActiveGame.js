let playersReady = {
    animals: 0,
    fruits: 0,
    random: 0
};

module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
    socket.on('generateActiveGame', (roomId) => {             
        playersReady[roomId]++;
           
            
        // CHANGE 2 INTO 4 WHEN DEPLOYING ------------IMPORTANT!
            // This if statement makes sure that the emit to frontend from the timer only happens after it's recieved a call from all 4 players. (2 currently so we only have to test with 2 players)
            if (playersReady[roomId] >= 2) {
                io.emit('recieveActiveGame', activeGames[roomId])
                playersReady[roomId] = 0
        }
        

    })
 }