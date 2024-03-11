import createElement from '../../lib/createElement.mjs';
let gameSection = document.getElementById('gameSection');

export default function renderAssignedColor() { 
    let chosenColor = localStorage.getItem('gameboardColor')
    let username = localStorage.getItem('username')

    gameSection.innerHTML = '';
    let colorDiv = createElement('div', 'chosenColorSquare', 'chosenColorSquare')
    colorDiv.style.backgroundColor = chosenColor;
    let containerDiv = createElement('div', '', 'flex-row');
    let h2 = createElement('h2')
    h2.textContent = `${username}, your chosen color is:`

    containerDiv.append(h2, colorDiv)
    gameSection.append(containerDiv)

    console.log(`Your color is ${chosenColor} `);

    setTimeout(function () {
        let test = createElement('p')
        test.textContent = 'I appear after 5 seconds'
        gameSection.append(test)
    }, 5000);
}