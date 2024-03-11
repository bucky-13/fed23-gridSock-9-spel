import createElement from '../../lib/createElement.mjs';

export default function updateChat(chat, chatBox, userActivity) {
    userActivity.innerText = '';

    const timestamp = new Date().toLocaleTimeString();
    
    const newMessage = createElement('li', 'newMessage', 'newMessage', `[${timestamp}] ${chat.user}: ${chat.message}`);

    if (chat.user === localStorage.getItem('username')) {
        newMessage.classList.add('leftMessage');
    } else if (chat.user === 'Server') {
        newMessage.classList.add('serverMessage');
    } else {
        newMessage.classList.add('rightMessage');
    }

    chatBox.appendChild(newMessage);
}