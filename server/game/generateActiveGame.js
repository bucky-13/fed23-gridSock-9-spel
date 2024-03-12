let playersReady = {
    animals: 0,
    fruits: 0,
    random: 0
};

let activeGamesSchema = {
    animals: {},
    fruits: {},
    random: {}
}
    // colors: [],
    // description: '',
    // gridColumns: 0,
    // grid: []


module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
        socket.on('generateActiveGame', (roomId) => { 
        playersReady[roomId]++;
        let gridCols = currentGameboardsUsed[roomId].gridColumns
        let gridLength = currentGameboardsUsed[roomId].grid.length             
            
        // CHANGE 2 INTO 4 WHEN DEPLOYING ------------IMPORTANT!
            // This if statement makes sure that the emit to frontend from the timer only happens after it's recieved a call from all 4 players. (2 currently so we only have to test with 2 players)
            if (playersReady[roomId] >= 2) {
                // let gridgrid = []
                activeGamesSchema[roomId].grid = []
                let gridColumns = []
                for (let i = 0; i < gridCols; i++) {
                    gridColumns.push(5)
                }
                for (let j = 0; j < gridLength; j++) {
                    activeGamesSchema[roomId].grid.push(gridColumns)
                }
                
                activeGamesSchema[roomId].colors = currentGameboardsUsed[roomId].colors
                activeGamesSchema[roomId].description = currentGameboardsUsed[roomId].description
                activeGamesSchema[roomId].gridColumns = currentGameboardsUsed[roomId].gridColumns
            
                activeGames[roomId] = activeGamesSchema[roomId]

                io.emit('recieveActiveGame', activeGames[roomId])

                // resets all variables used for this emit
                playersReady[roomId] = 0
                delete activeGamesSchema[roomId].grid
                delete activeGamesSchema[roomId].description
                delete activeGamesSchema[roomId].colors
                delete activeGamesSchema[roomId].gridColumns
                console.log(activeGamesSchema);
        }
        

    })
 }