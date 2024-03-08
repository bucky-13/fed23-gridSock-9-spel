import createElement from '../../lib/createElement.mjs';
import validateLogin from './validateLogin.mjs';

export default function renderLoginSection() {
        const loginContainer = createElement('section', 'loginContainer', 'loginContainer')

        chatSection.appendChild(loginContainer)

        const loginPageHeader = createElement('h2', 'loginPageHeader', 'loginPageHeader', 'Select a Nickname')

        
        const userNameInput = createElement('input', 'userNameInput', 'userNameInput', '')
        userNameInput.placeholder = 'Select a nickname';


        const loginBtn = createElement('button', 'loginBtn', 'loginBtn', 'Login')

        loginContainer.append(loginPageHeader, userNameInput, loginBtn)

        loginBtn.addEventListener('click', () => {
            // console.log(userNameInput.value.trim());
            validateLogin(userNameInput.value.trim(), loginContainer)
            
            
        })

    
        
}