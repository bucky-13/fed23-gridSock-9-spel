
module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
    socket.on('updateActiveGameboardServer', (roomId, x, y, color) => { 
        console.log(activeGames[roomId].grid[x][y]);
                  
            let clientInfo = [x, y, color]
 
            io.emit('updateActiveGameboardClient', clientInfo)
        })
 }