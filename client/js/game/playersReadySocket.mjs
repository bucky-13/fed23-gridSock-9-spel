import createElement from "../../lib/createElement.mjs"
import socket from "../../lib/socket.mjs";


function playerReady(usersReady) {
    console.log('test');
    let username = localStorage.getItem('username');

    let readyPlayerList = document.getElementById('readyPlayerList')
    readyPlayerList.innerText = '';

    usersReady.forEach((userReady) => {
            let readyPlayerLi = ''
               if (userReady === username) {
                readyPlayerLi = createElement('li', 'readyPlayerLi', 'readyPlayerLi', `${localStorage.getItem('username')} (you)`)
               } else {
                readyPlayerLi = createElement('li', 'readyPlayerLi', 'readyPlayerLi', `${userReady}`)
               }
               readyPlayerList.appendChild(readyPlayerLi);
           });
}

export default function playersReadySocket() {
    socket.on('updatePlayerReady', (usersReady) => {
    playerReady(usersReady);
});
} 
    