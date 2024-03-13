import renderGameLobbies from "./renderGameLobbies.mjs";
import { userLeavesRoom } from "./renderGameLobbies.mjs";
export default function resetToMain() {
    renderGameLobbies()
    userLeavesRoom(localStorage.getItem('roomId'))
}