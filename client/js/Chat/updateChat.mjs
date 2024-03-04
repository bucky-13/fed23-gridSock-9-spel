import createElement from '../../lib/createElement.mjs';

export default function updateChat(chat, chatBox, userActivity) {
    let topChat = document.querySelector('.newMessage');
    let newMessage = createElement('li', 'newMessage', 'newMessage', `${chat.user}: ${chat.message}`)
    if (chat.user === localStorage.getItem('username')) {
        newMessage.classList.add('leftMessage');
      } else if (chat.user === 'Server') {
        newMessage.classList.add('serverMessage');
        // newMessage.classList.remove('newMessage')
      } else {
        newMessage.classList.add('rightMessage');
      }
      userActivity.innerText = ''

    if (topChat) {
        topChat.parentNode.insertBefore(newMessage, topChat)
    } else {
        chatBox.append(newMessage)
    }
}