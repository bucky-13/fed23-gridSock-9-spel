import renderGameLobbies from "./renderGameLobbies.mjs";
import { userLeavesRoom } from "./renderGameLobbies.mjs";
export default function resetToMain() {
    let gameboardContainer = document.getElementById('gameboardContainer')
    if (gameboardContainer) {
        gameboardContainer.remove()
    }
    userLeavesRoom(localStorage.getItem('roomId'))
    // renderGameLobbies()
    localStorage.removeItem('roomId')
    localStorage.removeItem('gameboardColor')


}