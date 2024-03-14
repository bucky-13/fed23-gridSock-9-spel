import socket from "../../lib/socket.mjs";
import renderAssignedColor from "./renderAssignedColor.mjs";

export default function createNewGameSocket() { 
    
    socket.once('newGameStart', (arg) => {
        //Stores color player is using in local storage
        localStorage.setItem('gameboardColor', arg);
        renderAssignedColor();
    })
    
}