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
            let hintsLeft = 3;
            const hintBtn = createElement('button', 'hintBtn', 'hintBtn', `I need a hint (${hintsLeft} left)`)
            gameSection.append(finishGameBtn, hintBtn)

            hintBtn.addEventListener('click', () => {
                hintContainer.innerText = '';
                if (hintsLeft >= 1) {
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
                    hintsLeft -= 1; 
                    hintBtn.innerText = `I need a hint (${hintsLeft} left)`
                    console.log(hintsLeft);
                    if (hintsLeft === 0) {
                        hintBtn.setAttribute('disabled', '')
                    }
                } 
            
                gameboardContainer.appendChild(hintContainer)

                setTimeout( function() {
                    hintContainer.remove()
                }, 2000);

            })

            finishGameBtn.addEventListener('click', () => {

                // CHANGE TO CORRECT URL
                fetch(`https://game-99blu.ondigitalocean.app/randomGame/finishGame/${roomId}`, {
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

            })



            // Retrieving the data from server: updating players color to all clients.
            socket.on('updateActiveGameboardClient', (arg) => {
                const cell = document.querySelector(`.cell[data-x="${arg[0]}"][data-y="${arg[1]}"]`);
                if (cell) {
                    cell.style.backgroundColor = arg[2];
                }
            });
        })
            
    }, 10000);

    socket.on('gameResult', (result, activeGame, currentGame) => {
        // Do a call to a function in another module here and pass in result, activeGame, currentGame
        gameSection.innerText = ''
        if (result.score <= 10) {
        resultScore.innerText = `Your score: ${result.score.toFixed(2)}/${result.maxScore} Van...let that brush GO!`
        } else if (result.score > 10 && result.score <= 50) {
        resultScore.innerText = `Your score: ${result.score.toFixed(2)}/${result.maxScore}  let's just say you're no Picasso`
        } else {
            resultScore.innerText = `Your score: ${result.score.toFixed(2)}/${result.maxScore}  let's just say you're Picasso :)`
    }
        gameSection.append(resultContainer)
        resultContainer.append(resultScore, backToMainBtn)
    })

    gameSection.append(gameboardContainer);

}