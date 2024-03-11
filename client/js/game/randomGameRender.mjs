// import createElement from '../../lib/createElement.mjs';
import socket from '../../lib/socket.mjs';

// skapa grid för spelet
function createGameBoard(currentGame) {
    let gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';
    gameboardContainer.classList.add('gameboardContainer');
    gameboardContainer.style.backgroundColor = '#ffffff';

    for (let i = 0; i < currentGame.length; i++) {
        for (let j = 0; j < currentGame[i].length; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.id = `(${i},${j})`;
            cell.textContent = currentGame[i][j];

            gameboardContainer.appendChild(cell);
        }
    }
    let room = document.getElementById(roomName); // hur är det namngivet?
    if (room) {
        room.appendChild(gameboardContainer);
    } else {
        console.error(`Rummet "${roomName}" hittades inte.`);
    }
}
createGameBoard(currentGame, 'animals');

// get random object

export default function createNewGameFetch() {
    console.log('I AM NEW GAME');
    fetch('http://localhost:3001/randomGame', {
        method: 'GET'
    })
        .then((res) => res.json()).then((data) => {
            console.log(data);
            socket.emit('createNewGame', data)
          })
}
// Ha en funktion för att hämta det slumpade objektet från arrayen

    // Hur ska vi skriva vår fetch? Vi ska ha två fetch. 
    // hur ska vi skriva vår socket för att få kopplingen rätt? klient/server
    // ge alla "celler" unika id med tex 'cell-${i}-${j}'


// Rendera en spelplan utifrån den aktuella arrayen 
    // Visa i grid med färgvärden neutrala så det blir en spelplan att färglägga