import socket from '../../lib/socket.mjs';
import createElement from '../../lib/createElement.mjs';
import updateChat from './updateChat.mjs';
import errorMsg from '../../lib/validationMessage.mjs';

export default function chatRender(currentRoom) {
	// currentRoom = null
	const chatContainer = createElement(
		'section',
		'chatContainer',
		'chatContainer'
	);
	let existingChat = document.getElementById('chatbox');
	if (existingChat) {
		existingChat.remove();
	}
	let user = localStorage.getItem('username');
	// let currentRoom;
	chatSection.innerText = '';
	chatSection.appendChild(chatContainer);

	// Element för att lägga som tom placeholder tills användare skriver
    const chatRoomHeader = createElement('p', 'chatRoomHeader', 'chatRoomHeader', `${currentRoom} chat`)
	const userActivity = createElement('span', 'userActivity', 'userActivity');
	const chatBox = createElement('ul', 'chatBox', 'chatBox');
	chatBox.appendChild(userActivity);
	const userList = createElement('ul', 'userList', 'userList');

	// Elements for the sendMessageInput container
	const sendMessageInput = createElement(
		'textarea',
		'sendMessageInput',
		'sendMessageInput'
	);
	sendMessageInput.placeholder = 'Message';

	const sendMessageBtn = createElement(
		'button',
		'sendMessageBtn',
		'sendMessageBtn',
		'Send'
	);
	const chatInputContainer = createElement(
		'div',
		'chatInputContainer',
		'chatInputContainer'
	);
	chatInputContainer.append(sendMessageInput, sendMessageBtn);

	sendMessageInput.addEventListener('keypress', () => {
		socket.emit('activity', user, currentRoom);
	});

	// Denna socket lyssnar på användarens aktivitet
	// TO-DO OM TID FINNS: Göra så att det står "users" om flera skriver
	let clearActivity;

	sendMessageInput.addEventListener('keypress', (e) => {
		if (currentRoom !== 'general') {
			socket.emit('activity', user, currentRoom);
		}

		if(e.key === 'Enter') {
			e.preventDefault();
			sendMsg(user, currentRoom)
		}
	});

	socket.on('activityRoom', (typing) => {
		if (typing.username !== user) {
			userActivity.innerText = `${typing.username} is typing...`;
			clearTimeout(clearActivity);
			clearActivity = setTimeout(() => {
				userActivity.innerText = '';
			}, 3000);
		}
	});

	socket.on('activityGeneral', (typing) => {
		if (typing.username !== user) {
			userActivity.innerText = `${typing.username} is typing...`;
			clearTimeout(clearActivity);
			clearActivity = setTimeout(() => {
				userActivity.innerText = '';
			}, 3000);
		}
	});

	//Event listener for sending a new message
	sendMessageBtn.addEventListener('click', () => {
		sendMsg(user, currentRoom)
	});
	if (currentRoom != 'general') {
		socket.on('chatRoom', (arg) => {
			if (arg.room === currentRoom) {
				updateChat(arg, chatBox, userActivity);
				chatBox.scrollTop = chatBox.scrollHeight;
			}
		});
	} else if (currentRoom === 'general') {
		socket.on('chatGeneral', (arg) => {
			updateChat(arg, chatBox, userActivity);
			chatBox.scrollTop = chatBox.scrollHeight;
		});
	}
	chatContainer.append(chatRoomHeader, userList, chatBox, chatInputContainer);
}

function sendMsg(user, currentRoom) {
	if (sendMessageInput.value.trim() !== '') {
		if (currentRoom) {
			console.log('det här är current', currentRoom);
			socket.emit('chat', {
				user,
				message: sendMessageInput.value,
				room: currentRoom,
			});
		} else {
			console.log('det här är INTE current');

			socket.emit('chat', { user, message: sendMessageInput.value });
		}
		sendMessageInput.value = '';
	} else {
		errorMsg(chatContainer, 'The message cannot be empty!');
		console.log('The input field cannot be empty!');
	}

}