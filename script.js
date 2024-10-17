const moves = ['Rock', 'Paper', 'Scissors'];

let computerChoice;
let playerChoice;
const playerCount = document.getElementById('playerScore');
const computerCount = document.getElementById('computerScore');

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playermove) {
    
}

console.log(parseInt(playerCount.textContent))