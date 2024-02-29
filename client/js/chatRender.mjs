import socket from "../lib/socket.mjs"
import createElement from "../lib/createElement.mjs"
import updateChat from "./updateChat.mjs"
import errorMsg from "../lib/validationMessage.mjs"

export default function chatRender(mainContainer) {
    let existingChat = document.getElementById('chatbox')
    if (existingChat) {
        existingChat.remove()
    }
    let user = localStorage.getItem('username');
    console.log(user);
    const chatContainer = createElement('section', 'chatContainer', 'chatContainer');
    mainContainer.appendChild(chatContainer);

    const chatBox = createElement('ul', 'chatBox', 'chatBox');
    const sendMessageLabel = createElement('label', 'sendMessageLabel', 'sendMessageLabel', 'Message: ');
    const sendMessageInput = createElement('input', 'sendMessageInput', 'sendMessageInput');
    sendMessageInput.placeholder = 'Write something';
    sendMessageLabel.appendChild(sendMessageInput);

    const sendMessageBtn = createElement('button', 'sendMessageBtn', 'sendMessageBtn', 'Send');

    sendMessageBtn.addEventListener('click', () => {
        console.log('1');
        if (sendMessageInput.value.trim() !== '') {
            socket.emit('chat', { user: user, message: sendMessageInput.value });

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

    chatContainer.append(chatBox, sendMessageLabel, sendMessageBtn);
}