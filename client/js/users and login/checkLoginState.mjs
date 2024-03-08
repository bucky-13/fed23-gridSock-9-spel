import socket from '../../lib/socket.mjs';
import renderLoginSection from './renderLoginSection';
import loginUser from './loginUser.mjs';

let chatSection = document.getElementById('chatSection')

export default function checkLoginState() {
    chatSection.innerText = ''
    if (localStorage.getItem('username')) {

        if (localStorage.getItem('username')) {
        socket.connect();
        socket.emit('activeUsers', 'checkLoginState');
        socket.once('checkLoginState', (activeUsers) => {
            let userName = localStorage.getItem('username')

            if (Object.values(activeUsers).includes(userName)) {
                localStorage.clear();
                renderLoginSection();
            } else {
                loginUser(userName)
                }
             })
        } 
    } else {
        renderLoginSection();
    }
}