import createElement from '../../lib/createElement.mjs';
import socket from '../../lib/socket.mjs';

async function playerReady(usersReady) {
	let joinLobbyBtn = document.getElementById('joinLobbyBtn');
	let username = localStorage.getItem('username');

	let readyPlayerList = document.getElementById('readyPlayerList');
	readyPlayerList.innerText = '';

	usersReady.forEach((userReady) => {
		console.log(usersReady.length);
		let readyPlayerLi = '';
		if (userReady === username) {
			readyPlayerLi = createElement(
				'li',
				'readyPlayerLi',
				'readyPlayerLi',
				`${localStorage.getItem('username')} (you)`
			);
		} else {
			readyPlayerLi = createElement(
				'li',
				'readyPlayerLi',
				'readyPlayerLi',
				`${userReady}`
			);
		}
		readyPlayerList.appendChild(readyPlayerLi);
	});




}

export default function playersReadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn) {
	socket.on('updatePlayerReady', (usersReady) => {
        if (usersReady.includes(localStorage.getItem('username'))) {
            console.log(usersReady);
            joinLobbyBtn.remove()
            gameLobby.appendChild(leaveLobbyBtn)
        } else {
            joinLobbyBtn.innerText = 'join lobby';
        }

        if (usersReady.length === 2) {
            // joinLobbyBtn.remove()
            gameLobby.appendChild(startGameBtn);
            
        } else {
            startGameBtn.remove();
        }
		playerReady(usersReady);
	});
}
