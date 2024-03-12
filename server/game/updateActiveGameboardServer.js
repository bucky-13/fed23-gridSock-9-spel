const { users, rooms, currentGameboardsUsed, activeGames } = require('../lib/serverDatabase');

module.exports = (io, socket) => {
    socket.on('updateActiveGameboardServer', (roomId, row, col, color) => { 
        console.log(activeGames);
        // console.log(currentGameboardsUsed);
        // console.log(typeof col);
        // console.log(roomId);
        // console.log(activeGames[roomId]);
                  
            let clientInfo = [row, col, color]
 
            io.emit('updateActiveGameboardClient', clientInfo)
        })
 }