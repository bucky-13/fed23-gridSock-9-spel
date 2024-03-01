import createElement from '../lib/createElement.mjs'
import logoutUser from './logoutUser.mjs';
import chatRender from './chatRender.mjs';

let chatSection = document.getElementById('chatSection')

export default function renderLoggedIn() {

    const userStatusSection = createElement('section', 'userStatusSection', 'userStatusSection');
    const chatContainer = createElement('section', 'chatContainer', 'chatContainer');
    chatSection.appendChild(userStatusSection, chatContainer);
    const welcomeHeader = createElement('h4', 'welcomeHeader', 'welcomeHeader', `Logged in as ${localStorage.getItem('username')}`);
    const logOutBtn = createElement('button', 'logOutBtn', 'logOutBtn', 'Log out');
    userStatusSection.append(welcomeHeader, logOutBtn);
    logOutBtn.addEventListener('click', () => logoutUser(userStatusSection, chatContainer));

    chatRender(chatSection, chatContainer);
}