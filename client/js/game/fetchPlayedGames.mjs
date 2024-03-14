import displayPlayedGames from "./displayPlayedGames.mjs";

export default function fetchPlayedGames() {
    let userId = localStorage.getItem('userId');
    fetch(`http://localhost:3001/randomGame/playedGames/${userId}`, {
        method: 'GET'
    })
        .then((res) => res.json()).then((data) => {
            displayPlayedGames(data)
          })
}