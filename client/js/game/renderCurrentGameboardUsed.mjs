import createElement from '../../lib/createElement.mjs';
import socket from "../../lib/socket.mjs";

let gameSection = document.getElementById('gameSection');


export default function renderCurrentGameboardUsed(currentGame) { 
    let gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';
    gameboardContainer.classList.add('gameboardContainer');
    gameboardContainer.style.backgroundColor = '#ffffff';

    gameSection.appendChild(gameboardContainer);
    for (let i = 0; i < currentGame.length; i++) {
        for (let j = 0; j < currentGame[i].length; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.id = `cell-(${i},${j})`;
            cell.style.backgroundColor = "#f5f5dc";
            cell.textContent = currentGame[i][j];

        
            gameboardContainer.appendChild(cell);
        }
    }

    
    let test = createElement('p')
    test.textContent = `I appear after 5 seconds because I am 5 seconds big :D My name is ${currentGame.description}`
    gameSection.append(test, gameboardContainer);
    console.log(currentGame);
}