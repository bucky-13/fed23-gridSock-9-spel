import createElement from '../lib/createElement.mjs'
import logoutUser from './logoutUser.mjs';
import chatRender from './chatRender.mjs';

let mainContainer = document.getElementById('mainContainer')

export default function renderLoggedIn() {

    const mainPageSection = createElement('section', 'mainPageSection', 'mainPageSection');
    mainContainer.appendChild(mainPageSection);
    const welcomeHeader = createElement('h4', 'welcomeHeader', 'welcomeHeader', `Logged in as ${localStorage.getItem('username')}`);
    const logOutBtn = createElement('button', 'logOutBtn', 'logOutBtn', 'Log out');
    mainPageSection.append(welcomeHeader, logOutBtn);
    logOutBtn.addEventListener('click', () => logoutUser(mainPageSection));

    chatRender(mainContainer);
}