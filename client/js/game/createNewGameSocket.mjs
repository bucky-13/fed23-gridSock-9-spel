import socket from "../../lib/socket.mjs";

export default function createNewGameSocket() { 
    
    socket.on('newGameStart', (arg) => {
        console.log('creanewgamesocket');
        console.log(arg);
        //Stores color player is using in local storage
        localStorage.setItem('gameboardColor', arg);
    })
    
}