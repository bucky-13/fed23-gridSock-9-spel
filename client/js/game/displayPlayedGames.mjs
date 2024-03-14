import createElement from '../../lib/createElement.mjs'
let gameSection = document.getElementById('gameSection');

let isActive = false 

export default function displayPlayedGames(data) { 
    
    let userName = localStorage.getItem('username')

    let games = data

    if (isActive === false) {
        let playedGamesContainer = createElement('div', 'playedGamesContainer', 'playedGamesContainer')
        let topDiv = createElement('div', '', 'topDivPlayedGames')
        let test = createElement('h2', '', 'playedGamesH2', `Played Games by ${userName}`)
        let closeBtn = createElement('button', 'closeBtn', 'closeBtn', 'X')

        topDiv.append(test, closeBtn)
        playedGamesContainer.append(topDiv)
        gameSection.append(playedGamesContainer)
        isActive = true;

        closeBtn.addEventListener('click', () => {
            isActive = false;
            playedGamesContainer.remove();
        })

        let playedGamesListContainer = createElement('div', 'gamesListContainer', 'gamesListContainer');
        
        for (let x = 0; x < games.length; x++) {

            let playedGameContainer = createElement('div', `playedGameContainer${x}`, 'playedGameContainer');
            let playedGameGridContainer = createElement('div', `playedGameGridContainer${x}`, 'playedGameGridContainer');

            playedGameContainer.style.gridTemplateColumns = `repeat(${games[x].gridColumns}, 15px)`;
            playedGameContainer.style.gridTemplateRows = `repeat(${games[x].grid.length}, 15px)`;
            

            for (let i = 0; i < games[x].grid.length; i++) {
                for (let j = 0; j < games[x].gridColumns; j++) {
                    let cell = document.createElement('div');
                    cell.classList.add('cell'); 
                    cell.id = `cell-(${i},${j})`;
                    // Added: dataset-attribute, used to store custom data in HTML-elements. 
                    cell.dataset.x = i;
                    cell.dataset.y = j;
                    let cellNumber = games[x].grid[i][j];
                    let cellColor = games[x].colors[cellNumber];
                    cell.style.backgroundColor = cellColor;
    
            
                    playedGameContainer.append(cell);
                }
            }
            let h3 = createElement('h3', '', 'playedGamesH3', `${games[x].description}`)
            playedGameGridContainer.append(h3, playedGameContainer)
            playedGamesListContainer.append(playedGameGridContainer)
        }
        playedGamesContainer.append(playedGamesListContainer)

    }
}