import createElement from '../../lib/createElement.mjs';
import socket from "../../lib/socket.mjs";

let gameSection = document.getElementById('gameSection');


export default function renderCurrentGameboardUsed(arg) { 
    
    let test = createElement('p')
    test.textContent = `I appear after 5 seconds because I am 5 seconds big :D My name is ${arg.description}`
    gameSection.append(test)
    console.log(arg);
}