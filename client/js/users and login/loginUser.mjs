import socket from '../../lib/socket.mjs';
import renderLoggedIn from './renderLoggedIn.mjs';

export default function loginUser(userNameInput, loginContainer) {

    const inputUsername = userNameInput;

    let user = {userName: userNameInput}
    fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),})
        .then((res) => res.json()).then((data) => {
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
    
}