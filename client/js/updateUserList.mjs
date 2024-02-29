
import socket from "../lib/socket.mjs"
import errorMsg from '../lib/validationMessage.mjs';

const loginContainer = document.getElementById('loginContainer')

let usernameInput = document.getElementById('usernameInput');
let loginBtn = document.getElementById('loginBtn');
let logoutBtn = document.getElementById('logoutBtn');


let loggedInUsers = [];

let username = localStorage.getItem('username');


 function updateUserList(users) {
    console.log('updateUserList in function');
    console.log(users);
    let userList = document.getElementById('userList');

        // Update list of logged in users
    userList.innerHTML = '';
     loggedInUsers = users;
     const liHeader = document.createElement('li');
     liHeader.textContent = 'Logged in users:';
     userList.appendChild(liHeader);



            loggedInUsers.forEach((user) => {
                const li = document.createElement('li');
                li.textContent = user;
                userList.appendChild(li);
            });

}

export default function listenForSocketUpdate() {
    socket.on('updateUserList', (users) => {
    loggedInUsers = users;
    updateUserList(users);
});
} 
  
    // // log in and log out user
    // loginBtn.addEventListener('click', () => {
    //     const inputUsername = usernameInput.value.trim();
    //     if (inputUsername) {
    //         localStorage.setItem('username', inputUsername);
    //         let username = inputUsername;
    //         socket.emit('login', username);
    //         usernameInput.value = '';
    //     } else {
    //         errorMsg(loginContainer, 'Please input a nickname')
    //     }
    // });

    // logoutBtn.addEventListener('click', () => {
    //     localStorage.removeItem('username');
    //     socket.emit('logout');
    //     socket.disconnect();
    //     updateUserList([]);
    // });
    
