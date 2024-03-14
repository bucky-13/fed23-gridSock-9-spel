import socket from "../../lib/socket.mjs";
import createNewGameSocket from "./createNewGameSocket.mjs";
import renderGameLobbies from "./renderGameLobbies.mjs";
import { userLeavesRoom } from "./renderGameLobbies.mjs";
export default function resetToMain() {
    let gameboardContainer = document.getElementById('gameboardContainer')
    if (gameboardContainer) {
        gameboardContainer.remove()
    }
    let roomId = localStorage.getItem('roomId')

    userLeavesRoom(roomId)
    socket.emit('endGameAndReturnToLobby', roomId)
    // renderGameLobbies()
    localStorage.removeItem('roomId')
    localStorage.removeItem('gameboardColor')
    createNewGameSocket(true)


}