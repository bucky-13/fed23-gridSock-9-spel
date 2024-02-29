import { io } from 'socket.io-client';
import updateUserList from './updateUserList.mjs';


let sendMessage = document.getElementById('sendMessage');
let sendBtn = document.getElementById('sendBtn');
let chatList = document.getElementById('chatList');


export default function init() {

    const socket = io('https://game-99blu.ondigitalocean.app');
    

    updateUserList(users)
    
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
}
