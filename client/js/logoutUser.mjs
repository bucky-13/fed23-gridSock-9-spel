import checkLoginState from "./checkLoginState.mjs";
import socket from "../lib/socket.mjs";

socket.on('logout', () => {
    let username = localStorage.getItem('username')
})

export default function logoutUser(mainPageSection) {
    mainPageSection.remove();
    localStorage.clear();
    socket.emit('logout', localStorage.getItem('username'));
    socket.disconnect();
    checkLoginState();
}