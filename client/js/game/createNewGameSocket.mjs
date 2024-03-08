import socket from "../../lib/socket.mjs";

export default function createNewGameSocket() { 
    
    socket.on('newGameStart', (arg) => {
        console.log(arg);
    })
    
}