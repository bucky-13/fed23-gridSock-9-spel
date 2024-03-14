
import createElement from "../../lib/createElement.mjs";
import socket from "../../lib/socket.mjs";
import joinRoom from "./joinRoom.mjs";
import chatRender from "../Chat/chatRender.mjs";

let gameSection = document.getElementById('gameSection');

export default function renderGameLobbies() {
    gameSection.innerText= ''
    let currentRoom = 'general';
    chatRender(currentRoom)

    let gameLobbyContainer = createElement('section', 'gameLobbyContainer', 'gameLobbyContainer', '');
    gameSection.appendChild(gameLobbyContainer);

    socket.emit('getRooms');

    socket.on('printRooms', (rooms) => {

        gameLobbyContainer.innerText = '';

        Object.keys(rooms).forEach(room => {
            const roomArticleHeader = createElement('h3', `${room}roomArticleHeader`, 'roomArticleHeader', `${room} - (${rooms[room].length}/4 in lobby)`);
            const roomArticle = createElement('article', `${room}`, 'roomArticle');

            const joinRoomBtn = createElement('button', `${room}`, 'joinRoomBtn', `Join ${room}`);
            const leaveRoomBtn = createElement('button', `leaveRoomBtn${room}`, 'leaveRoomBtn', `Leave ${room}`);

            if (rooms[room].length >= 4) { //CHANGE TO 4 @@@
                joinRoomBtn.setAttribute('disabled', '')
                joinRoomBtn.innerText = 'Lobby is full'
            }

            socket.emit('isGameInProgress', room)
            socket.on('isRoomAvailable', (arg, playersInGame, roomId) => {

                if (room === roomId) {
                    if (arg === 'no') {  
                        joinRoomBtn.setAttribute('disabled', '')
                        joinRoomBtn.innerText = 'Game still in progress'
                    } 
                }
            })

            roomArticle.append(roomArticleHeader, joinRoomBtn);
            gameLobbyContainer.appendChild(roomArticle);

            joinRoomBtn.addEventListener('click', () => {
              currentRoom = room;
                joinRoom(room, leaveRoomBtn, roomArticleHeader);

                localStorage.setItem('roomId', room)
                
                if (rooms[room].length >= 4) { //CHANGE TO 4 @@@
                    joinRoomBtn.setAttribute('disabled', '')
                    joinRoomBtn.innerText = 'Lobby is full'
                }
                chatRender(currentRoom)
            });
            leaveRoomBtn.addEventListener('click', () => {
                userLeavesRoom(room)
            });

            
        });
    });

}

export function userLeavesRoom(room) {
    let username = localStorage.getItem('username')
    let roomId = room; 
    socket.emit('leaveRoom', { username, roomId });
    renderGameLobbies()
}