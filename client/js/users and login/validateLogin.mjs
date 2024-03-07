import errorMsg from '../../lib/validationMessage.mjs';
import socket from '../../lib/socket.mjs';
import loginUser from './loginUser.mjs';

export default function validateLogin(userName, loginContainer) {
    // VALIDATION FOR TEXT FIELD, IF EMPTY ERROR MSG IS SHOWN
    if (userName == '') {
        errorMsg(loginContainer, 'Please input a nickname to continue')
    } else {
        socket.connect();
        socket.emit('activeUsers', 'validateLogin');
        socket.once('validateLogin', (activeUsers) => {
            
            // SECOND VALIDATION CHECK, IF USERNAME IS ALREADY LOGGED IN FROM SOMEWHERE ELSE, ERROR MSG IS SHOWN
            if (Object.values(activeUsers).includes(userName)) {
                errorMsg(loginContainer, 'Nickname already in use, please enter a different nickname to continue')
                return
            } else {
                loginUser(userName, loginContainer)
                return
             }
        })
    }
 }