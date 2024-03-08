import socket from "../../lib/socket.mjs";

export default function createNewGameFetch() {
    console.log('I AM NEW GAME');
    fetch('http://localhost:3001/randomGame', {
        method: 'GET'
    })
        .then((res) => res.json()).then((data) => {
            console.log(data);
            socket.emit('startNewGame')
          })
}