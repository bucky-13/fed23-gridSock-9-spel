import errorMsg from "../lib/validationMessage.mjs";
import socket from "../lib/socket.mjs";
import checkLoginState from "./checkLoginState.mjs";

export default function loginUser(userNameInput) {
    const inputUsername = userNameInput.value.trim();
    if (inputUsername) {
        localStorage.setItem('username', inputUsername);
        let username = inputUsername;
        socket.emit('login', username);
        userNameInput.value = '';

        checkLoginState()
    } else {
        errorMsg(loginContainer, 'Please input a username to continue')
    }
}