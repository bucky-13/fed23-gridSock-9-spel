import createElement from '../../lib/createElement.mjs'
import logoutUser from './logoutUser.mjs';
import chatRender from '../Chat/chatRender.mjs';
// import gameLobbyRender from '../game/gameLobbyRender.mjs';
import renderGameLobbies from '../game/renderGameLobbies.mjs';
import fetchPlayedGames from '../game/fetchPlayedGames.mjs';

let navContainer = document.getElementById('navContainer')
// let chatSection = document.getElementById('chatSection')

export default function renderLoggedIn() {

    const userStatusSection = createElement('section', 'userStatusSection', 'userStatusSection');
    navContainer.appendChild(userStatusSection) // Antingen så eller ändra till statisk html
    const welcomeHeader = createElement('h4', 'welcomeHeader', 'welcomeHeader', `Logged in as ${localStorage.getItem('username')}`);
    const playedGamesBtn = createElement('button', 'playedGamesBtn', 'playedGamesBtn', 'Played games')
    const logOutBtn = createElement('button', 'logOutBtn', 'logOutBtn', 'Log out');
    userStatusSection.append(welcomeHeader, playedGamesBtn, logOutBtn);
    logOutBtn.addEventListener('click', () => logoutUser(userStatusSection));
    playedGamesBtn.addEventListener('click', () => fetchPlayedGames());

    // gameLobbyRender()
    // chatRender();
    renderGameLobbies()

}