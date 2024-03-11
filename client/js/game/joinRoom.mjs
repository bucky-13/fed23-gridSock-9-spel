import createElement from "../../lib/createElement.mjs";
import socket from "../../lib/socket.mjs";
import feedbackMsg from "../../lib/validationMessage.mjs"
import createNewGameFetch from "./createNewGameFetch.mjs";
import createNewGameSocket from "./createNewGameSocket.mjs";

export default function joinRoom(room, leaveRoomBtn) {
    let username = localStorage.getItem('username');
    
    socket.emit('joinRoom', { username, roomId: room });

    gameSection.innerText = '';
    let gameBoard = createElement('section', 'gameBoard', 'gameBoard');
    let gameLobby = createElement('div', 'gameLobby', 'gameLobby');
    let gameLobbyHeader = createElement('h3', 'gameLobbyHeader', 'gameLobbyHeader', `${room} Lobby`);
    let playersList = createElement('ul', 'playersList', 'playersList');

    let startGameBtn = createElement('button', 'startGameBtn', 'startGameBtn', 'Start game');
    startGameBtn.setAttribute('disabled', '');

    gameBoard.appendChild(gameLobbyHeader);
    gameLobby.append(playersList, startGameBtn, leaveRoomBtn);
    gameBoard.appendChild(gameLobby);
    gameSection.appendChild(gameBoard);

    socket.on('updateRooms', (updatedRoom) => {
        const roomArticleHeader = document.getElementById(`${room}roomArticleHeader`);
        if (roomArticleHeader) {
            roomArticleHeader.innerText = `${room} - (${updatedRoom[room].length}/4 in lobby)`;
        }
    
        gameLobby.appendChild(leaveRoomBtn);
    
        if (updatedRoom[room].length >= 2) {
            startGameBtn.setAttribute('disabled', '');
            if (updatedRoom[room].includes(localStorage.getItem('username'))) {
                startGameBtn.removeAttribute('disabled');
            } else {
                feedbackMsg(gameLobby, 'Lobby is full');
            }
        } else {
            startGameBtn.setAttribute('disabled', '');
        }
    
        playersList.innerText = '';
        let playersInLobby = createElement('p', 'playersInLobby', 'playersInLobby', `Players in lobby - ${updatedRoom[room].length}/4`);
        playersList.appendChild(playersInLobby);
    
        let readyPlayerLi = '';
        updatedRoom[room].forEach((user) => {
            if (user === username) {
                readyPlayerLi = createElement('li', `playerReady${username}`, 'readyPlayerLi', `${user} (you)`);
            } else {
                readyPlayerLi = createElement('li', 'readyPlayerLi', 'readyPlayerLi', `${user}`);
            }
            playersList.appendChild(readyPlayerLi);
        });
    });
    createNewGameSocket();
    startGameBtn.addEventListener('click', () => {
        console.log(startGameBtn.disabled);
        createNewGameFetch();
    })

    socket.emit('getRooms');

}