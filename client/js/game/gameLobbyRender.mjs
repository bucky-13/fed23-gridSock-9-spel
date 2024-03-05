let gameSection = document.getElementById('gameSection')
import createElement from "../../lib/createElement.mjs"
import playersReadySocket from "./playersReadySocket.mjs"
import socket from "../../lib/socket.mjs"

export default function gameLobbyRender() {

    let gameBoard = createElement('section', 'gameBoard', 'gameBoard')
    let gameLobby = createElement('div', 'gameLobby', 'gameLobby')
    let gameLobbyHeader = createElement('h3', 'gameLobbyHeader', 'gameLobbyHeader', 'On your marks...Get ready....Set....')
    let readyPlayerList = createElement('ul','readyPlayerList', 'readyPlayerList' )
    let joinLobbyBtn = createElement('button', 'joinLobbyBtn', 'joinLobbyBtn', "Join Lobby")
    let leaveLobbyBtn = createElement('button', 'leaveLobbyBtn', 'leaveLobbyBtn', "Leave Lobby")

    let startGameBtn = createElement(
        'button',
        'startGameBtn',
        'startGameBtn',
        'Start game'
    );
    
    gameLobby.append(gameLobbyHeader, readyPlayerList, joinLobbyBtn)
    gameBoard.appendChild(gameLobby)
    gameSection.appendChild(gameBoard)

    joinLobbyBtn.addEventListener('click', () => {
        let username = localStorage.getItem('username');
        socket.emit('playerReady', username)
        playersReadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn)})
}