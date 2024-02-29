import createElement from "../lib/createElement.mjs";

export default function updateChat(chat, chatBox) {
    let newMessage = createElement('li', 'newMessage', 'newMessage', `${chat.user}: ${chat.message}`)
    chatBox.appendChild(newMessage)
}