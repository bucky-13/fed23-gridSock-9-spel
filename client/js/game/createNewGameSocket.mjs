import socket from "../../lib/socket.mjs";
import renderAssignedColor from "./renderAssignedColor.mjs";

let runFunction = true;

export default function createNewGameSocket(reset) { 
    
    if (runFunction) {

        socket.once('newGameStart', (arg) => {
            //Stores color player is using in local storage
            localStorage.setItem('gameboardColor', arg);
            renderAssignedColor();
        })
        runFunction = false;
    }

    if (reset) {
        runFunction = true;
    }
    
}