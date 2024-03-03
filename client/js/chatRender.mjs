import socket from '../lib/socket.mjs'
import createElement from '../lib/createElement.mjs'
import updateChat from './updateChat.mjs'
import errorMsg from '../lib/validationMessage.mjs'

export default function chatRender(chatSection, chatContainer) {
    let existingChat = document.getElementById('chatbox')
    if (existingChat) {
        existingChat.remove()
    }
    let user = localStorage.getItem('username');
    console.log(user);
    
    chatSection.appendChild(chatContainer);

    const chatBox = createElement('ul', 'chatBox', 'chatBox');
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
    socket.on('activity', (username) => {
        console.log(`${username} is typing...`);
    })

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
        updateChat(arg, chatBox);
    });

    chatContainer.append(userList, chatInputContainer, chatBox);
}