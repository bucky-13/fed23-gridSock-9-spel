import createElement from "../lib/createElement.mjs";

export default function updateChat(chat, chatBox) {
    let topChat = document.querySelector('.newMessage');
    let newMessage = createElement('li', 'newMessage', 'newMessage', `${chat.user}: ${chat.message}`)
    chatBox.insertBefore(newMessage, topChat)
}