import socket from '../../lib/socket.mjs';
import renderLoginSection from './renderLoginSection';
import loginUser from './loginUser.mjs';

let chatSection = document.getElementById('chatSection')


export default function checkLoginState() {
    console.log('checkLoginState');
    chatSection.innerText = ''
    if (localStorage.getItem('username')) {

            if (localStorage.getItem('username')) {
        socket.connect();
        socket.emit('activeUsers', 'checkLoginState');
        socket.on('checkLoginState', (activeUsers) => {
            console.log(activeUsers);
            let userName = localStorage.getItem('username')

            if (Object.values(activeUsers).includes(userName)) {
                console.log('user duplicate');
                localStorage.clear();
                renderLoginSection();
                
            } else {
                console.log('user available');
                // let userName = localStorage.getItem('username')
             console.log('hello');
            loginUser(userName)
            }
        })
        // socket.off('sendActiveUsers')
    }
        
    } else {

        renderLoginSection();
    }
}