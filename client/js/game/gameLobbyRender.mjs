let gameSection = document.getElementById('gameSection');
import createElement from '../../lib/createElement.mjs';
import playersReadySocket from './playersReadySocket.mjs';
import socket from '../../lib/socket.mjs';
import playersUnreadySocket from './playersUnReadySocket.mjs';
import { feedbackMsg } from '../../lib/validationMessage.mjs';
import createNewGameFetch from './createNewGameFetch.mjs';
import createNewGameSocket from './createNewGameSocket.mjs';


export default function gameLobbyRender() {
    
	gameSection.innerText = '';
	let gameBoard = createElement('section', 'gameBoard', 'gameBoard');
	let gameLobby = createElement('div', 'gameLobby', 'gameLobby');
	let gameLobbyHeader = createElement(
		'h3',
		'gameLobbyHeader',
		'gameLobbyHeader',
		'On your marks...Get ready....Set....'
	);
	let readyPlayerList = createElement(
		'ul',
		'readyPlayerList',
		'readyPlayerList'
	);
	let joinLobbyBtn = createElement(
		'button',
		'joinLobbyBtn',
		'joinLobbyBtn',
		'Join Lobby'
	);
	let leaveLobbyBtn = createElement(
		'button',
		'leaveLobbyBtn',
		'leaveLobbyBtn',
		'Leave Lobby'
	);

	let startGameBtn = createElement(
		'button',
		'startGameBtn',
		'startGameBtn',
		'Start game'
	);
	startGameBtn.setAttribute('disabled', '');
	gameBoard.appendChild(gameLobbyHeader);
	gameLobby.append(readyPlayerList, startGameBtn, joinLobbyBtn);
	gameBoard.appendChild(gameLobby);
	gameSection.appendChild(gameBoard);

	startGameBtn.addEventListener('click', () => {
		console.log(startGameBtn.disabled);
		createNewGameFetch();
		createNewGameSocket()
		
	}
	)
	
    socket.on('updatePlayerReady', (usersReady) => { 
        
        let username = localStorage.getItem('username');
        if (usersReady.includes(username)) {
            joinLobbyBtn.remove();
            gameLobby.appendChild(leaveLobbyBtn);
        }

    if (usersReady.length === 2) {
        console.log('This is', usersReady);
        startGameBtn.setAttribute('disabled', '')

        if (usersReady.includes(localStorage.getItem('username'))) {
            startGameBtn.removeAttribute('disabled')
        } else {
            feedbackMsg(gameLobby, 'Lobby is full')
        }
        
        joinLobbyBtn.setAttribute('disabled', '')
    } else {
        feedbackMsg(gameLobby, '')
        startGameBtn.setAttribute('disabled', '')
        joinLobbyBtn.removeAttribute('disabled')

    }
    

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
    })

	joinLobbyBtn.addEventListener('click', () => {
		let username = localStorage.getItem('username');
		socket.emit('playerReady', username);
		playersReadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn);
	});

	leaveLobbyBtn.addEventListener('click', () => {
		let username = localStorage.getItem('username');
		socket.emit('playerUnReady', username);
		playersUnreadySocket(startGameBtn, gameLobby, joinLobbyBtn, leaveLobbyBtn);
	});
}
