import createElement from "../../lib/createElement.mjs";
import socket from "../../lib/socket.mjs";

export default function joinRoom(room, leaveRoomBtn) {
    let username = localStorage.getItem('username');
    let roomId = room;  

    const updateRooms = (room) => {
        console.log('Updating rooms:', room);
    };

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

    socket.on('updateRooms', (updatedRoom) => {
        updateRooms(updatedRoom);

        console.log('rummet', updatedRoom);
        console.log('längd', Object.keys(updatedRoom).length);

        gameLobby.appendChild(leaveRoomBtn);

        if (updatedRoom.length === 2) {
            console.log('This is', updatedRoom);
            startGameBtn.setAttribute('disabled', '');

            if (updatedRoom.includes(localStorage.getItem('username'))) {
                startGameBtn.removeAttribute('disabled');
            } else {
                feedbackMsg(gameLobby, 'Lobby is full');
            }
        } else {
            startGameBtn.setAttribute('disabled', '');
        }

        playersList.innerText = '';
        let playersInLobby = createElement('p', 'playersInLobby', 'playersInLobby', `Players in lobby - ${Object.keys(updatedRoom).length}/4`);
        playersList.appendChild(playersInLobby);

        let readyPlayerLi = '';
        Object.keys(updatedRoom).forEach((user) => {
            console.log(user);
            console.log(updatedRoom);
            console.log(updatedRoom[user]);
            if (updatedRoom[user] === username) {
                console.log('det här är rum test', updatedRoom);
                readyPlayerLi = createElement('li', `playerReady${username}`, 'readyPlayerLi', `${updatedRoom[user]} (you)`);
            } else {
                readyPlayerLi = createElement('li', 'readyPlayerLi', 'readyPlayerLi', `${updatedRoom[user]}`);
            }
            playersList.appendChild(readyPlayerLi);
        });
    });
}