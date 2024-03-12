import createElement from '../../lib/createElement.mjs';
import socket from "../../lib/socket.mjs";
import renderEmptyGameboardColorClick from './renderEmptyGameboardColorClick.mjs';

let gameSection = document.getElementById('gameSection');


export default function renderCurrentGameboardUsed(currentGame) { 
    let roomId = localStorage.getItem('roomId')
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
            cell.dataset.x = i;
            cell.dataset.y = j;
            let cellNumber = currentGame.grid[i][j];
            let cellColor = currentGame.colors[cellNumber];
            cell.style.backgroundColor = cellColor;

        
            gameboardContainer.appendChild(cell);
        }
    }

    setTimeout(function () {
            

        socket.emit('generateActiveGame', roomId)
        socket.on('recieveActiveGame', (arg) => { 

            
            console.log(arg);
            // Empty gameboard (sets new background color)
            renderEmptyGameboardColorClick(socket, color, roomId, currentGame);

            // Retrieving the data from server, updating player colors to all clients
            socket.on('updateActiveGameboardClient', (arg) => {
                const cell = document.querySelector(`.cell[data-x="${arg[0]}"][data-y="${arg[1]}"]`);
                if (cell) {
                    cell.style.backgroundColor = arg[2];
                }
            });
        })
            
        // DETTA ÄR TESTKOD FÖR EVENTLISTENER, TA BORT DET HÄRIFRÅN ELLER KOMMENTERA UT, ANVÄND SAMMA NAMN I SOCKET FÖR ATT KALLA PÅ BACKEND
        // test.addEventListener('click', () => {
        // socket.emit('updateActiveGameboardServer', roomId, 4, 6, color)
        // })

        // socket.on('updateActiveGameboardClient', (arg) => { 
        // console.log('updateActiveGameboardClient');
        //     console.log(arg);
        //     test.style.color = arg[2]
        // LÅT ALLT UNDER DENNA KOMMENTAREN LIGGA KVAR SÅLÄNGE :)
        //})
    }, 1000);

    // DETTA SKA BORT SÅ SMÅNINGOM, JAG ANVÄNDER DET BARA FÖR ATT TESTA SAKER JUST NU :)
    let test = createElement('p')
    test.textContent = `I appear after 5 seconds because I am 5 seconds big :D My name is ${currentGame.description}`
    gameSection.append(test, gameboardContainer);
    console.log(currentGame);
}