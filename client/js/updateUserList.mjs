import { io } from 'socket.io-client';
import errorMsg from '../lib/validationMessage.mjs';

const loginContainer = document.getElementById('loginContainer')

let usernameInput = document.getElementById('usernameInput');
let loginBtn = document.getElementById('loginBtn');
let logoutBtn = document.getElementById('logoutBtn');

let userList = document.getElementById('userList');
let loggedInUsers = [];

let username = localStorage.getItem('username');


const socket = io('https://game-99blu.ondigitalocean.app'); 

export default function updateUserList(users) {


        // Update list of logged in users
            userList.innerHTML = '';
            loggedInUsers = users;


            loggedInUsers.forEach((user) => {
                const li = document.createElement('li');
                li.textContent = user;
                userList.appendChild(li);
            });

}

socket.on('updateUserList', (users) => {
    loggedInUsers = users;
    updateUserList(users);
});
  
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

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        socket.emit('logout');
        socket.disconnect();
        updateUserList([]);
    });
    
