import socket from "../../lib/socket.mjs";
import renderAssignedColor from "./renderAssignedColor.mjs";

export default function createNewGameSocket() { 
    
    // let roomId = localStorage.getItem('roomId')
    socket.on('newGameStart', (arg) => {
        // console.log(roomId);
        console.log('creanewgamesocket');
        console.log(arg);
        //Stores color player is using in local storage
        localStorage.setItem('gameboardColor', arg);
        renderAssignedColor();
    })
    
}