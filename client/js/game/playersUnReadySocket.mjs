import socket from "../../lib/socket.mjs";
import createElement from "../../lib/createElement.mjs";
import { feedbackMsg } from "../../lib/validationMessage.mjs";

async function playerUnReady(usersReady) {
	let username = localStorage.getItem('username');



    let readyPlayerList = document.getElementById('readyPlayerList');
	readyPlayerList.innerText = '';


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

export default function playersUnreadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn) {
	socket.on('playerReady', (usersReady) => {
            console.log(usersReady);

            if (!usersReady.includes(localStorage.getItem('username'))) {
                leaveLobbyBtn.remove()
                gameLobby.appendChild(joinLobbyBtn)
            }

        if (usersReady.length === 2 && !usersReady.includes(localStorage.getItem('username'))) {
            startGameBtn.removeAttribute('disabled')
        } else {
            startGameBtn.setAttribute('disabled', '')
            joinLobbyBtn.removeAttribute('disabled')
        }
        feedbackMsg(gameLobby, '')
		playerUnReady(usersReady);
	});
}
