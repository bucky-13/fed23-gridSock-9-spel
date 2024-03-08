import createElement from '../../lib/createElement.mjs'
import logoutUser from './logoutUser.mjs';
import chatRender from '../Chat/chatRender.mjs';
import gameLobbyRender from '../game/gameLobbyRender.mjs';

let navContainer = document.getElementById('navContainer')
let chatSection = document.getElementById('chatSection')

export default function renderLoggedIn() {

    const userStatusSection = createElement('section', 'userStatusSection', 'userStatusSection');
    const chatContainer = createElement('section', 'chatContainer', 'chatContainer');
    navContainer.appendChild(userStatusSection) // Antingen så eller ändra till statisk html
    chatSection.appendChild(chatContainer);
    const welcomeHeader = createElement('h4', 'welcomeHeader', 'welcomeHeader', `Logged in as ${localStorage.getItem('username')}`);
    const logOutBtn = createElement('button', 'logOutBtn', 'logOutBtn', 'Log out');
    userStatusSection.append(welcomeHeader, logOutBtn);
    logOutBtn.addEventListener('click', () => logoutUser(userStatusSection));

    gameLobbyRender()
    chatRender(chatSection, chatContainer);
}