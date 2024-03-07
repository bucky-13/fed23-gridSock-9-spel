import errorMsg from '../../lib/validationMessage.mjs';
import socket from '../../lib/socket.mjs';

export default function validateLogin(userName) {

    console.log(userName);

    if (userName == '') {
        errorMsg(loginContainer, 'Please input a nickname to continue')
    } else {
        socket.connect();
        socket.emit('activeUsers', '');
        socket.on('activeUsers', (activeUsers) => {
            console.log(activeUsers);
        })
    }
 }