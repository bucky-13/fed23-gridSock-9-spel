import createElement from "../../lib/createElement.mjs";
import socket from "../../lib/socket.mjs";

export default function joinRoom(room, leaveRoomBtn) {
    let username = localStorage.getItem('username');
    let roomId = room;  
    socket.emit('joinRoom', { username, roomId });

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

    socket.on('updateRooms', (room) => { 
    console.log('rummet', room);
    console.log('längd', Object.keys(room).length);
    // let username = localStorage.getItem('username');
    // if (Object.keys(room).includes(username)) {
        gameLobby.appendChild(leaveRoomBtn);
    // }

    if (Object.keys(room).length === 2) {
        console.log('This is', room);
        startGameBtn.setAttribute('disabled', '');

        // if (room.includes(localStorage.getItem('username'))) {
        startGameBtn.removeAttribute('disabled');
        // } else {
        //     feedbackMsg(gameLobby, 'Lobby is full')
        // }

    } else {
        // feedbackMsg(gameLobby, '')
        startGameBtn.setAttribute('disabled', '');
    }

    // let playersList = document.getElementById('playersList');
    playersList.innerText = '';
    let playersInLobby = createElement('p', 'playersInLobby', 'playersInLobby', `Players in lobby - ${Object.keys(room).length}/4`);
    playersList.appendChild(playersInLobby);

      room.forEach((user) => { 
        console.log(room.length);
        let readyPlayerLi = '';
        if (user === username) {
            readyPlayerLi = createElement('li', `playerReady${username}`, 'readyPlayerLi', `${username} (you)`);
        } else {
            readyPlayerLi = createElement('li', 'readyPlayerLi', 'readyPlayerLi', `${user}`);
        }
        playersList.appendChild(readyPlayerLi);
    });
    })
}