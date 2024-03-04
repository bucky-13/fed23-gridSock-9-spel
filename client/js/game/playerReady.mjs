import createElement from "../../lib/createElement.mjs"

export default function playerReady(readyPlayerList) {
    
    let playerName = createElement('li', 'playerName', 'playerName', `${localStorage.getItem('username')}`)

    readyPlayerList.appendChild(playerName)
}