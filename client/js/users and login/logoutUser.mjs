import checkLoginState from './checkLoginState.mjs';
import socket from '../../lib/socket.mjs';

export default function logoutUser(userStatusSection, chatContainer) {
    let chatBox = document.querySelector('#chatBox')
    chatBox.innerHTML = '';
    userStatusSection.remove();
    chatContainer.remove();
    socket.off('chat');

    localStorage.clear();
    socket.emit('logout', localStorage.getItem('username'));
    socket.disconnect();
    console.log('logout');
    checkLoginState();
}