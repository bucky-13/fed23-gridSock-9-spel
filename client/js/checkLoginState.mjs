import createElement from '../lib/createElement.mjs';
import loginUser from './loginUser.mjs';

let mainContainer = document.getElementById('mainContainer')


export default function checkLoginState() {
    mainContainer.innerText = ''
    if (localStorage.getItem('username')) {
        let userName = localStorage.getItem('username')
        console.log('hello');
        loginUser(userName)
    } else {

        const loginContainer = createElement('section', 'loginContainer', 'loginContainer')

        mainContainer.appendChild(loginContainer)

        const loginPageHeader = createElement('h2', 'loginPageHeader', 'loginPageHeader', 'Please select a nick name')

        const userNameLabel = createElement('label', 'usernameLabel', 'usernameLabel', 'Username')
        
        const userNameInput = createElement('input', 'userNameInput', 'userNameInput', '')

        userNameLabel.appendChild(userNameInput)

        const loginBtn = createElement('button', 'loginBtn', 'loginBtn', 'Login')

        loginContainer.append(loginPageHeader, userNameLabel, loginBtn)

        loginBtn.addEventListener('click', () => {
            console.log(userNameInput.value.trim());
            loginUser(userNameInput.value.trim())
        })
    }
}