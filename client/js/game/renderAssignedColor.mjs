import createElement from '../../lib/createElement.mjs';
import socket from '../../lib/socket.mjs';
import renderCurrentGameboardUsed from './renderCurrentGameboardUsed.mjs';

let gameSection = document.getElementById('gameSection');

export default function renderAssignedColor() { 
    let chosenColor = localStorage.getItem('gameboardColor')
    let username = localStorage.getItem('username')
    let roomId = localStorage.getItem('roomId')

    gameSection.innerHTML = '';
    let colorDiv = createElement('div', 'chosenColorSquare', 'chosenColorSquare')
    colorDiv.style.backgroundColor = chosenColor;
    let containerDiv = createElement('div', '', 'flex-row');
    let h2 = createElement('h2')
    h2.textContent = `${username}, your chosen color is:`

    containerDiv.append(h2, colorDiv)
    gameSection.append(containerDiv)

    console.log(`Your color is ${chosenColor} `);

    setTimeout(function () {
        socket.emit('sendCurrentGameboardUsed', roomId)
        socket.on('recieveCurrentGameboardUsed', (arg) => { 
            renderCurrentGameboardUsed(arg)
        })
    }, 5000);
}