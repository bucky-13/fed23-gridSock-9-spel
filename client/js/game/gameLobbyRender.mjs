let gameSection = document.getElementById('gameSection')
import createElement from "../../lib/createElement.mjs"
import playerReady from "./playerReady.mjs"

export default function gameLobbyRender() {

    let gameBoard = createElement('section', 'gameBoard', 'gameBoard')
    let gameLobby = createElement('div', 'gameLobby', 'gameLobby')
    let gameLobbyHeader = createElement('h3', 'gameLobbyHeader', 'gameLobbyHeader', 'On your marks...Get ready....Set....')
    let readyPlayerList = createElement('ul','readyPlayerList', 'readyPlayerList' )
    let gameLobbyBtn = createElement('button', 'gameLobbyBtn', 'gameLobbyBtn', "I'm ready!")

    gameLobby.append(gameLobbyHeader, readyPlayerList, gameLobbyBtn)
    gameBoard.appendChild(gameLobby)
    gameSection.appendChild(gameBoard)

    gameLobbyBtn.addEventListener('click', () => playerReady(readyPlayerList))
}