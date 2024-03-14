import displayPlayedGames from "./displayPlayedGames.mjs";

export default function fetchPlayedGames() {
    let userId = localStorage.getItem('userId');
    fetch(`https://game-99blu.ondigitalocean.app/randomGame/playedGames/${userId}`, {
        method: 'GET'
    })
        .then((res) => res.json()).then((data) => {
            displayPlayedGames(data)
          })
}