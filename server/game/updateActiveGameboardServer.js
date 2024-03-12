
module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
    socket.on('updateActiveGameboardServer', (roomId, row, col, color) => { 
        console.log(activeGames);
                  
            let clientInfo = [row, col, color]
 
            io.emit('updateActiveGameboardClient', clientInfo)
        })
 }