
import createElement from "../../lib/createElement.mjs";
import socket from "../../lib/socket.mjs";
import joinRoom from "./joinRoom.mjs";

let gameSection = document.getElementById('gameSection');

export default function renderGameLobbies() {
    gameSection.innerText= ''

    let gameLobbyContainer = createElement('section', 'gameLobbyContainer', 'gameLobbyContainer', '');
    gameSection.appendChild(gameLobbyContainer);

    socket.emit('getRooms');

    socket.on('printRooms', (rooms) => {
        console.log(rooms);

        gameLobbyContainer.innerText = '';

        Object.keys(rooms).forEach(room => {
            const roomArticleHeader = createElement('h3', `${room}`, 'roomArticleHeader', `${room} - (${rooms[room].length}/4 in lobby)`);
            const roomArticle = createElement('article', `${room}`, 'roomArticle');

            const joinRoomBtn = createElement('button', `${room}`, 'joinRoomBtn', `Join ${room}`);
            const leaveRoomBtn = createElement('button', `${room}`, 'leaveRoomBtn', `Leave ${room}`);

            roomArticle.append(roomArticleHeader, joinRoomBtn);
            gameLobbyContainer.appendChild(roomArticle);

            joinRoomBtn.addEventListener('click', () => {
                joinRoom(room, leaveRoomBtn, roomArticleHeader);
             
            });
            leaveRoomBtn.addEventListener('click', () => userLeavesRoom(room));

            
        });
    });

    socket.on('updateRooms', (updatedRooms) => {
        // Loop through updatedRooms and update the header for each room
        Object.keys(updatedRooms).forEach(room => {
            const roomArticleHeader = document.getElementById(`${room}`);
            if (roomArticleHeader) {
                roomArticleHeader.innerText = `${room} - (${updatedRooms[room].length}/4 in lobby)`;
            }
        });
    });
}

function userLeavesRoom(room) {
    let username = localStorage.getItem('username')
    let roomId = room; 
    socket.emit('leaveRoom', { username, roomId });

    renderGameLobbies()
}