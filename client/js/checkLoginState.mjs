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

        const loginPageHeader = createElement('h2', 'loginPageHeader', 'loginPageHeader', 'Select a Nickname')

        
        const userNameInput = createElement('input', 'userNameInput', 'userNameInput', '')
        userNameInput.placeholder = 'Nickname';


        const loginBtn = createElement('button', 'loginBtn', 'loginBtn', 'Login')

        loginContainer.append(loginPageHeader, userNameInput, loginBtn)

        loginBtn.addEventListener('click', () => {
            console.log(userNameInput.value.trim());
            loginUser(userNameInput.value.trim())
            loginContainer.remove();
        })
    }
}