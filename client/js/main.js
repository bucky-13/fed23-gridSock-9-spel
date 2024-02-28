import '../css/style.scss';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // change to ip adress when deployad

let sendMessage = document.getElementById('sendMessage');
let sendBtn = document.getElementById('sendBtn');
let chatList = document.getElementById('chatList');

let usernameInput = document.getElementById('usernameInput');
let loginBtn = document.getElementById('loginBtn');
let logoutBtn = document.getElementById('logoutBtn');

let userList = document.getElementById('userList');
let loggedInUsers = [];

let username = localStorage.getItem('username');

// Update list of logged in users
function updateUserList(users) {
	userList.innerHTML = '';
	loggedInUsers = users;

	loggedInUsers.forEach((user) => {
		const li = document.createElement('li');
		li.textContent = user;
		userList.appendChild(li);
	});
}

socket.on('updateUserList', (users) => {
	loggedInUsers = users;
	updateUserList(users);
});

// log in and log out user
loginBtn.addEventListener('click', () => {
	const inputUsername = usernameInput.value.trim();
	if (inputUsername) {
		localStorage.setItem('username', inputUsername);
		username = inputUsername;
		socket.emit('login', username);
		usernameInput.value = '';
	} else {
		alert('Användarnamn får inte vara tomt');
	}
});
logoutBtn.addEventListener('click', () => {
	localStorage.removeItem('username');
	socket.emit('logout');
	socket.disconnect();
	updateUserList([]);
});

// the chat
sendBtn.addEventListener('click', () => {
	if (!username) {
		alert('Du måste logga in för att skicka meddelanden');
		return;
	}
	if (!sendMessage.value.trim()) {
		alert('Meddelandet kan inte vara tomt');
		return;
	}
	socket.emit('chat', { message: sendMessage.value, user: username });
	sendMessage.value = '';
});

socket.on('chat', (arg) => {
	updateChat(arg);
});

function updateChat(chat) {
	let li = document.createElement('li');
	if (chat.user) {
		let strong = document.createElement('strong'); // sätter en strongtagg
		strong.innerText = chat.user; // lägger användannamnet inom strong
		li.appendChild(strong);
	}
	if (chat.message) {
		li.innerHTML += ': ' + chat.message; // lägger användarnamnet + chatmeddelande
	}

	chatList.appendChild(li);
}
