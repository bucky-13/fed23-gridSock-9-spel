import checkLoginState from './checkLoginState.mjs';
import socket from '../../lib/socket.mjs';

let gameSection = document.getElementById('gameSection')


export default function logoutUser(userStatusSection, chatContainer) {
    let chatBox = document.querySelector('#chatBox')
    chatBox.innerHTML = '';
    gameSection.innerHTML = '';
    userStatusSection.remove();
    chatContainer.remove();
    socket.off('chat');

    localStorage.clear();
    socket.emit('logout', localStorage.getItem('username'));
    socket.disconnect();
    console.log('logout');
    checkLoginState();
}