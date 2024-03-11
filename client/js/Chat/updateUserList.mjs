
import socket from '../../lib/socket.mjs';
import errorMsg from '../../lib/validationMessage.mjs';
// import gameLobbyRender from '../game/gameLobbyRender.mjs';

let loggedInUsers = [];

function updateUserList(users) {
     let username = localStorage.getItem('username');
    // console.log('updateUserList in function');
    // console.log(users);
    let userList = document.getElementById('userList');

        // Update list of logged in users
    userList.innerText = '';
     loggedInUsers = users;
     const liHeader = document.createElement('li');
     liHeader.textContent = 'Logged in users:';
     userList.appendChild(liHeader);



            loggedInUsers.forEach((user) => {
                let li = '';
                if (user === username) {
                    li = document.createElement('li');
                    li.classList.add('activeUserLoggedIn')
                li.textContent = user;
                } else {
                     li = document.createElement('li');
                li.textContent = user;
                }
                userList.appendChild(li);
            });

}

export default function listenForSocketUpdate() {

    socket.on('updateUserList', (users) => {
    loggedInUsers = users;
    updateUserList(users);
});
} 
    
