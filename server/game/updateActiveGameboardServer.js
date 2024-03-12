
module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
    socket.on('updateActiveGameboardServer', (roomId, x, y, color) => { 
        console.log(activeGames[roomId].grid[x][y]);

        // Finds the index of the color sent from client
        let colorIndex = activeGames[roomId].colors
        let index = colorIndex.findIndex((col) => col === color)
        
        // updates the activeGamesGrid with the changed cell
        activeGames[roomId].grid[x][y] = index

        // Array that gets sent back to client, not sure if last one is needed, right now only used for testing     
        let clientInfo = [x, y, color, activeGames[roomId]]
 
        io.emit('updateActiveGameboardClient', clientInfo)
        })
}
 
