let gameSection = document.getElementById('gameSection')
import createElement from "../../lib/createElement.mjs"
import playersReadySocket from "./playersReadySocket.mjs"
import socket from "../../lib/socket.mjs"
import playersUnreadySocket from "./playersUnReadySocket.mjs"

export default function gameLobbyRender(usersReady) {
    gameSection.innerText = ''
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
    startGameBtn.setAttribute('disabled', '')
    gameLobby.append(gameLobbyHeader, readyPlayerList, startGameBtn, joinLobbyBtn)
    gameBoard.appendChild(gameLobby)
    gameSection.appendChild(gameBoard)

    joinLobbyBtn.addEventListener('click', () => {
        let username = localStorage.getItem('username');
        socket.emit('playerReady', username)
        playersReadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn)})

        leaveLobbyBtn.addEventListener('click', () => {
            let username = localStorage.getItem('username');
            socket.emit('playerUnReady', username)
            playersUnreadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn)
        
        })

    socket.emit('updatePlayerList', Object.values(usersReady));

}