import createElement from '../../lib/createElement.mjs';
import socket from '../../lib/socket.mjs';
import { feedbackMsg } from '../../lib/validationMessage.mjs';

async function playerReady(usersReady) {
	let username = localStorage.getItem('username');

	let readyPlayerList = document.getElementById('readyPlayerList');
	readyPlayerList.innerText = '';
    let playersInLobby = createElement('p', 'playersInLobby', 'playersInLobby', `Players in lobby - ${usersReady.length}/4`)
    readyPlayerList.appendChild(playersInLobby)
	usersReady.forEach((userReady) => {
		console.log(usersReady.length);
		let readyPlayerLi = '';
		if (userReady === username) {
			readyPlayerLi = createElement(
				'li',
				`playerReady${username}`,
				'readyPlayerLi',
				`${username} (you)`
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
                joinLobbyBtn.remove();
                gameLobby.appendChild(leaveLobbyBtn);
            }

        if (usersReady.length === 2) {
            if (usersReady.includes(localStorage.getItem('username'))) {
                startGameBtn.removeAttribute('disabled')
            } else {
                feedbackMsg(gameLobby, 'Lobby is full')
            }
            
            joinLobbyBtn.setAttribute('disabled', '')
        } else {
            startGameBtn.setAttribute('disabled', '')
            joinLobbyBtn.removeAttribute('disabled')

        }
        
		playerReady(usersReady);
	});
}

