import errorMsg from '../../lib/validationMessage.mjs';
import socket from '../../lib/socket.mjs';
import renderLoggedIn from './renderLoggedIn.mjs';

export default function loginUser(userNameInput, loginContainer) {

    const inputUsername = userNameInput;
    if (inputUsername != '') {

    let user = {userName: userNameInput}
        // console.log('fetching...');
    fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),})
        .then((res) => res.json()).then((data) => {
        // console.log(data);
        if (data.userName) {
            socket.connect();
            localStorage.setItem('username', inputUsername);
            let username = inputUsername;
            socket.emit('login', username);
            if (loginContainer) {
                loginContainer.remove();
            }
            renderLoggedIn();
        }
          })
    } else {
        errorMsg(loginContainer, 'Please input a nickname to continue')
    }
}