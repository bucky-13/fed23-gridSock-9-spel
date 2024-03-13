import createElement from '../../lib/createElement.mjs';
import socket from "../../lib/socket.mjs";
import renderEmptyGameboardColorClick from './renderEmptyGameboardColorClick.mjs';

let gameSection = document.getElementById('gameSection');


export default function renderCurrentGameboardUsed(currentGame) { 
    let roomId = localStorage.getItem('roomId')
    let userId = localStorage.getItem('userId')
    let color = localStorage.getItem('gameboardColor')
    let gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';
    gameboardContainer.classList.add('gameboardContainer');

    document.documentElement.style.setProperty('--grid-columns', currentGame.gridColumns);
    document.documentElement.style.setProperty('--grid-rows', currentGame.gridRows);


    for (let i = 0; i < currentGame.grid.length; i++) {
        for (let j = 0; j < currentGame.gridColumns; j++) {
            // console.log('Number of columns:', currentGame.gridColumns);
            let cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.id = `cell-(${i},${j})`;
            // Added: dataset-attribute, used to store custom data in HTML-elements. 
            cell.dataset.x = i;
            cell.dataset.y = j;
            let cellNumber = currentGame.grid[i][j];
            let cellColor = currentGame.colors[cellNumber];
            cell.style.backgroundColor = cellColor;

        
            gameboardContainer.appendChild(cell);
        }
    }

    setTimeout(function () {
            

        socket.emit('generateActiveGame', roomId, userId)
        socket.on('recieveActiveGame', (arg) => { 

            
            console.log(arg);
        
            // Render empty gameboard - ready to play (sets new background color)
            renderEmptyGameboardColorClick(socket, color, roomId, currentGame);

            // Just so I had a button for testing backend, feel free to change name, class etc on this one
            const finishGameBtn = createElement('button', 'endGameBtn', 'endGameBtn', 'End game')
            gameSection.append(finishGameBtn)

            finishGameBtn.addEventListener('click', () => {
                // make a call to a fetch request here instead, and add the socket emit on the next line after you've recieved a response from the fetch request
                socket.emit('gameFinished', roomId)
            })

            socket.on('gameResult', (result, activeGame, currentGame) => {
                // Do a call to a function in another module here and pass in result, activeGame, currentGame
                // You can remove console logs, they are just there for reference
                console.log(result);
                console.log(activeGame);
                console.log(currentGame);
            })

            // Retrieving the data from server: updating players color to all clients.
            socket.on('updateActiveGameboardClient', (arg) => {
                const cell = document.querySelector(`.cell[data-x="${arg[0]}"][data-y="${arg[1]}"]`);
                if (cell) {
                    cell.style.backgroundColor = arg[2];
                }
            });
        })
            
    }, 1000);

    gameSection.append(gameboardContainer);

}