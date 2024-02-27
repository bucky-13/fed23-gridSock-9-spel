import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

let sendMessage = document.querySelector('#sendMessage');
let sendBtn = document.querySelector('#sendBtn');
let chatList = document.querySelector('#chatList');

socket.on('chat', (argh) => {
  console.log('SOCKET!', argh);
  updateChat(argh);
});

let user = 'tim';

function updateChat(chat) {
  let li = document.createElement('li');
  li.innerText = `${chat.user}: ${chat.message}`;
  chatList.appendChild(li);
}

sendBtn.addEventListener('click', () => {
  socket.emit('chat', { message: sendMessage.value, user: user });
  console.log('sent chat', sendMessage.value);
});
