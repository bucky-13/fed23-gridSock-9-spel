import createElement from '../../lib/createElement.mjs';
import socket from "../../lib/socket.mjs";
import renderEmptyGameboardColorClick from './renderEmptyGameboardColorClick.mjs';
import resetToMain from './resetToMain.mjs';

let gameSection = document.getElementById('gameSection');


export default function renderCurrentGameboardUsed(currentGame) { 
    let roomId = localStorage.getItem('roomId')
    let userId = localStorage.getItem('userId')
    let color = localStorage.getItem('gameboardColor')
    let gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';
    gameboardContainer.classList.add('gameboardContainer');
    gameboardContainer.innerText = ''

    document.documentElement.style.setProperty('--grid-columns', currentGame.gridColumns);
    document.documentElement.style.setProperty('--grid-rows', currentGame.gridRows);

    // TEST FOR PEAK/HINT
    let hintContainer = createElement('div', 'hintContainer', 'hintContainer')
    // results page elements
    let resultContainer = createElement('div', 'resultContainer', 'resultContainer')
    let resultScore = createElement('p', 'resultScore', 'resultScore')
    let backToMainBtn = createElement('button', 'backToMainBtn', 'backToMainBtn', 'Back to menu')

    backToMainBtn.addEventListener('click', resetToMain)


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
        socket.once('recieveActiveGame', (arg) => { 

            
            console.log(arg);
        
            // Render empty gameboard - ready to play (sets new background color)
            renderEmptyGameboardColorClick(socket, color, roomId, currentGame);

            // Just so I had a button for testing backend, feel free to change name, class etc on this one
            const finishGameBtn = createElement('button', 'endGameBtn', 'endGameBtn', 'End round')
            const hintBtn = createElement('button', 'hintBtn', 'hintBtn', 'Take a peak')
            gameSection.append(finishGameBtn, hintBtn)

            hintBtn.addEventListener('click', () => {
                hintContainer.innerText = '';
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
            
                    
                        hintContainer.appendChild(cell);
                    }
                }
            
                gameboardContainer.appendChild(hintContainer)

                setTimeout( function() {
                    hintContainer.remove()
                }, 5000);

            })

            finishGameBtn.addEventListener('click', () => {

                // CHANGE TO CORRECT URL
                fetch(`http://localhost:3001/randomGame/finishGame/${roomId}`, {
                    method: 'GET'
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    socket.emit('gameFinished', roomId)
                    socket.emit('gameResult')
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });

                console.log('Hiiii');


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

    socket.on('gameResult', (result, activeGame, currentGame) => {
        // Do a call to a function in another module here and pass in result, activeGame, currentGame
        // You can remove console logs, they are just there for reference
        console.log(result);
        console.log(activeGame);
        console.log(currentGame);
        gameSection.innerText = ''
        if (result.score <= 10) {
        resultScore.innerText = `Your score: ${result.score.toFixed(2)}/${result.maxScore} Van...let that brush GO!`
    } else if (result.score >= 11 && result <=50) {
        resultScore.innerText = `Your score: ${result.score.toFixed(2)}/${result.maxScore}  let's just say you're no Picasso`
    }
        gameSection.append(resultContainer)
        resultContainer.append(resultScore, backToMainBtn)
        // socket.emit('roundFinished', roomId)

    })

    gameSection.append(gameboardContainer);

}