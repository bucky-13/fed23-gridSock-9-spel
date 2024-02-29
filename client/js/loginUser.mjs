import errorMsg from "../lib/validationMessage.mjs";
import socket from "../lib/socket.mjs";
import renderLoggedIn from "./renderLoggedIn.mjs";

export default function loginUser(userNameInput) {
    socket.connect();
    const inputUsername = userNameInput;
    if (inputUsername != '') {
        localStorage.setItem('username', inputUsername);
        let username = inputUsername;
        socket.emit('login', username);

        renderLoggedIn();
    } else {
        errorMsg(loginContainer, 'Please input a username to continue')
    }
}