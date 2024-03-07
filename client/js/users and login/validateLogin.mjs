import errorMsg from '../../lib/validationMessage.mjs';
import socket from '../../lib/socket.mjs';
import loginUser from './loginUser.mjs';

export default function validateLogin(userName, loginContainer) {

    console.log(userName);

    if (userName == '') {
        errorMsg(loginContainer, 'Please input a nickname to continue')
    } else {
        console.log('else');
        socket.connect();
        socket.emit('activeUsers', 'validateLogin');
        socket.on('validateLogin', (activeUsers) => {
            console.log('socket');
            console.log(activeUsers);

            if (Object.values(activeUsers).includes(userName)) {
                console.log('wrong user name');
                errorMsg(loginContainer, 'Nickname already in use, please enter a different nickname to continue')
                return
            } else {
                console.log('login');
                loginUser(userName, loginContainer)
                return
             }
        })
    }
 }