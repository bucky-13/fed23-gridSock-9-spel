import checkLoginState from './checkLoginState.mjs';
import socket from '../lib/socket.mjs';

// socket.on('logout', () => {
//     let username = localStorage.getItem('username')
// })

export default function logoutUser(mainPageSection, chatContainer) {
    let chatBox = document.querySelector('#chatBox')
    chatBox.innerHTML = '';
    mainPageSection.remove();
    chatContainer.remove();
    socket.off('chat');

    localStorage.clear();
    socket.emit('logout', localStorage.getItem('username'));
    socket.disconnect();
    console.log('logout');
    checkLoginState();
}