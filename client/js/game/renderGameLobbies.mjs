
import createElement from "../../lib/createElement.mjs";
import socket from "../../lib/socket.mjs";
import joinRoom from "./joinRoom.mjs";

const rooms = ['animals', 'fruits', 'random'];

let gameSection = document.getElementById('gameSection');

export default function renderGameLobbies() {
    let gameLobbyContainer = createElement('section', 'gameLobbyContainer', 'gameLobbyContainer', '')
    gameSection.appendChild(gameLobbyContainer)
    rooms.forEach(room => {
        const roomArticleHeader = createElement('h3', `${room}`, 'roomArticleHeader', `${room}`)
        const roomArticle = createElement('article', `${room}`, 'roomArticle')

        const joinRoomBtn = createElement('button', `${room}`, 'joinRoomBtn', `Join ${room}`)
        const leaveRoomBtn = createElement('button', `${room}`, 'leaveRoomBtn', `Leave ${room}`)

        roomArticle.append(roomArticleHeader, joinRoomBtn)

        gameLobbyContainer.appendChild(roomArticle);

        joinRoomBtn.addEventListener('click', () => joinRoom(room, leaveRoomBtn));

        leaveRoomBtn.addEventListener('click', () => userLeavesRoom(room, gameLobbyContainer
        ));

        socket.on('updateRooms', (updatedRooms) => {
            let username = localStorage.getItem('username')

            console.log(updatedRooms);
            const currentRoom = updatedRooms[room];  

            // if (currentRoom.includes(username)) {
            //     joinRoomBtn.remove();
            //     roomArticle.appendChild(leaveRoomBtn);
            // } else {
            //     leaveRoomBtn.remove();
            //     roomArticle.appendChild(joinRoomBtn);
            // }

            if (Object.keys(room) === 2) {
                if (currentRoom.includes(localStorage.getItem('username'))) {
                    console.log('Users in room: ', currentRoom);
                    console.log('Users room full');
                } else {
                    feedbackMsg(gameLobbyContainer, 'Lobby is full');
                }

                joinRoomBtn.setAttribute('disabled', '');
            } else {
                // startGameBtn.setAttribute('disabled', '')
                joinRoomBtn.removeAttribute('disabled');
            }
        });
    });
}

function userLeavesRoom(room, gameLobbyContainer) {
    gameLobbyContainer.innerText = ''
    let username = localStorage.getItem('username')
    let roomId = room; 
    socket.emit('leaveRoom', { username, roomId });
    renderGameLobbies()
}