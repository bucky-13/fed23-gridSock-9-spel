module.exports = (io, socket, rooms) => { 

    socket.on('getRooms', () => {

        io.emit('printRooms', rooms);

    });
    
};