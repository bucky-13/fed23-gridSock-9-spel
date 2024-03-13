module.exports = (io, socket, users, rooms, currentGameboardsUsed) => { 
        socket.on('gameFinished', (roomId, data) => {

        // console.log(currentGameboardsUsed);

        
            
            io.to(userSocketId).emit('gameFinishedClient', `${data.colors[i]}`)
        
     })

}