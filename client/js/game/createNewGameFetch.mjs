import socket from "../../lib/socket.mjs";

export default function createNewGameFetch() {
    let roomId = localStorage.getItem('roomId');
    console.log(roomId);
    console.log('I AM NEW GAME');
    fetch(`http://localhost:3001/randomGame/${roomId}`, {
        method: 'GET'
    })
        .then((res) => res.json()).then((data) => {
            let roomId = localStorage.getItem('roomId')
            console.log(data);
            socket.emit('createNewGame', data, roomId)
          })
}