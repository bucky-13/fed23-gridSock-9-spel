import createElement from '../../lib/createElement.mjs'
let gameSection = document.getElementById('gameSection');

let isActive = false 

export default function displayPlayedGames() { 

    if (isActive === false) {
    let playedGamesContainer = createElement('div', 'playedGamesContainer', 'playedGamesContainer')
        let test = createElement('h2', '', '', 'I am played Games!')
        let closeBtn = createElement('button', 'closeBtn', 'closeBtn', 'X')

    playedGamesContainer.append(closeBtn, test)
        console.log(isActive);
    gameSection.append(playedGamesContainer)
        console.log('test');
        isActive = true;

        closeBtn.addEventListener('click', () => {
            isActive = false;
            playedGamesContainer.remove();
        })
    }

}