import checkLoginState from './checkLoginState.mjs';
import socket from '../../lib/socket.mjs';

let gameSection = document.getElementById('gameSection')
let chatSection = document.getElementById('chatSection')


export default function logoutUser(userStatusSection, chatContainer) {
    let chatBox = document.querySelector('#chatBox')
    // chatBox.innerHTML = '';
    gameSection.innerHTML = '';
    chatSection.innerHTML = '';
    userStatusSection.remove();
    // chatContainer.remove();

    socket.emit('logout', localStorage.getItem('username'));
    socket.off('chat');

    localStorage.clear();
    socket.disconnect();
    console.log('logout');
    checkLoginState();
}