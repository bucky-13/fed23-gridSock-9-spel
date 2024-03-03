import socket from '../lib/socket.mjs'
import createElement from '../lib/createElement.mjs'
import updateChat from './updateChat.mjs'
import errorMsg from '../lib/validationMessage.mjs'
import { feedbackMsg } from '../lib/validationMessage.mjs'

export default function chatRender(chatSection, chatContainer) {
    let existingChat = document.getElementById('chatbox')
    if (existingChat) {
        existingChat.remove()
    }
    let user = localStorage.getItem('username');
    console.log(user);
    
    chatSection.appendChild(chatContainer);

    // Element för att lägga som tom placeholder tills användare skriver
    const userActivity = createElement('span', 'userActivity', 'userActivity');
    const chatBox = createElement('ul', 'chatBox', 'chatBox');
    chatBox.appendChild(userActivity)
    const userList = createElement('ul', 'userList', 'userList');

    // Elements for the sendMessageInput container
    const sendMessageInput = createElement('textarea', 'sendMessageInput', 'sendMessageInput');
    sendMessageInput.placeholder = 'Message';    

    const sendMessageBtn = createElement('button', 'sendMessageBtn', 'sendMessageBtn', 'Send');
    const chatInputContainer = createElement('div', 'chatInputContainer', 'chatInputContainer')
    chatInputContainer.append(sendMessageInput, sendMessageBtn)

    sendMessageInput.addEventListener('keypress', () => {
        socket.emit('activity', user)
    })

    // Denna socket lyssnar på användarens aktivitet
    // TO-DO OM TID FINNS: Göra så att det står "users" om flera skriver
    let clearActivity;

    socket.on('activity', (typing) => {
        if (typing.username) {
            userActivity.innerText = `${typing.username} is typing...`;
            clearTimeout(clearActivity);
            clearActivity = setTimeout(() => {
                userActivity.innerText = '';
            }, 3000);
        } else if (typing.username.length > 1) {
            userActivity.innerText = 'Users are typing...';
        }
    });

    //Event listener for sending a new message
    sendMessageBtn.addEventListener('click', () => {
        console.log('1');
        if (sendMessageInput.value.trim() !== '') {
            socket.emit('chat', { user: user, message: sendMessageInput.value });
            sendMessageInput.value = ''
        } else {
            errorMsg(chatContainer, 'The message cannot be empty!');
            console.log('The input field cannot be empty!');
        }      
    });

    socket.on('chat', (arg) => {
        console.log('2');
        console.log('socket', arg);
        updateChat(arg, chatBox, userActivity);
    });

    chatContainer.append(userList, chatInputContainer, chatBox);
}