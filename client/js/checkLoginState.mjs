import createElement from "../lib/createElement.mjs";
const loginContainer = document.getElementById('loginContainer')

export default function checkLoginState() {
    if (localStorage.getItem('loggedInUser')) {
        console.log('hello');

        const loginPageHeader = createElement('h2', 'loginPageHeader', 'loginPageHeader', 'Login')

        const logOutBtn = createElement('button', 'logOutBtn', 'logOutBtn', 'Log out')

        loginContainer.append(loginPageHeader, logOutBtn)
    } else {

        loginContainer.appendChild(loginContainer)

        const userNameLabel = createElement('label', 'usernameLabel', 'usernameLabel', 'Username')
        
        const userNameInput = createElement('input', 'userNameInput', 'userNameInput', '')
        userNameLabel.appendChild(userNameInput)

        const loginBtn = createElement('button', 'loginBtn', 'loginBtn', 'Login')

        loginContainer.append(loginPageHeader, userNameLabel, loginBtn)
    }
}