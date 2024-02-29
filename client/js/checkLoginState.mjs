import createElement from "../lib/createElement.mjs";
import loginUser from "./loginUser.mjs";
import renderLoggedIn from "./renderLoggedIn.mjs";

let mainContainer = document.getElementById('mainContainer')
// const loginContainer = document.getElementById('loginContainer')


export default function checkLoginState() {
    mainContainer.innerText = ''
    if (localStorage.getItem('username')) {
        console.log('hello');

        renderLoggedIn()
    } else {

        const loginContainer = createElement('section', 'loginContainer', 'loginContainer')

        mainContainer.appendChild(loginContainer)

        const loginPageHeader = createElement('h2', 'loginPageHeader', 'loginPageHeader', 'Select a nickname')

        const userNameLabel = createElement('label', 'usernameLabel', 'usernameLabel', '')
        
        const userNameInput = createElement('input', 'userNameInput', 'userNameInput', '')
        userNameInput.placeholder = 'Nickname';

        userNameLabel.appendChild(userNameInput)

        const loginBtn = createElement('button', 'loginBtn', 'loginBtn', 'Login')

        loginContainer.append(loginPageHeader, userNameLabel, loginBtn)

        loginBtn.addEventListener('click', () => loginUser(userNameInput))
    }
}