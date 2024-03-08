import checkLoginState from './checkLoginState.mjs';
import socket from '../../lib/socket.mjs';

let gameSection = document.getElementById('gameSection')
let chatSection = document.getElementById('chatSection')

export default function logoutUser(userStatusSection) {
    gameSection.innerHTML = '';
    chatSection.innerHTML = '';
    userStatusSection.remove();

    socket.emit('logout', localStorage.getItem('username'));
    // not sure if these 2 socket.off are needed
    socket.off('chat');
    socket.off('login')

    localStorage.clear();
    socket.disconnect();
    checkLoginState();
}