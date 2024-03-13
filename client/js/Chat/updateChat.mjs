import createElement from '../../lib/createElement.mjs';

export default function updateChat(chat, chatBox, userActivity) {
    userActivity.innerText = '';

    const timestamp = new Date().toLocaleTimeString();
    let chatUser = createElement('strong', 'chatUser', 'chatUser', ` ${chat.user}: `)

    const newMessage = createElement('li', 'newMessage', 'newMessage', `[${timestamp}]`);
    newMessage.append(chatUser, chat.message)

    if (chat.user === localStorage.getItem('username')) {
        newMessage.classList.add('rightMessage');
    } else if (chat.user === 'Server') {
        newMessage.classList.add('serverMessage');
    } else {
        newMessage.classList.add('leftMessage');
    }

    chatBox.appendChild(newMessage);
}

