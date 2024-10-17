const moves = ['Rock', 'Paper', 'Scissors'];

let computerChoice;
let playerChoice;
const playerCount = document.getElementById('playerScoreNum');
const computerCount = document.getElementById('computerScoreNum');
const playerImage = document.querySelector('.playerScore img');
const computerImage = document.querySelector('.computerScore img');
const bannerText = document.querySelector('.header h2');

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getResult(playerMove, computerMove) {
    if (playerMove == "Rock" && computerMove == "Paper") {
        return 'computer'; 
    } else if (playerMove == "Paper" && computerMove == "Scissors") {
        return 'computer';
    } else if (playerMove == "Scissors" && computerMove == "Rock") {
        return 'computer';
    } else if (playerMove == "Rock" && computerMove == "Scissors") {
        return 'player';
    } else if (playerMove == "Paper" && computerMove == "Rock") {
        return 'player';
    } else if (playerMove == "Scissors" && computerMove == "Paper") {
        return 'player';
    } else {
        return 'draw';
    }
}

function playRound(playerMove) {
    let computerMove = moves[randomChoice(0, 2)];

    playerImage.src = 'images/' + playerMove.toLowerCase() + '.png';
    computerImage.src = 'images/' + computerMove.toLowerCase() + '.png';

    let result = getResult(playerMove, computerMove);

    if (result == 'player') {
        let playerScore = parseInt(playerCount.textContent);
        playerScore += 1;
        playerCount.textContent = playerScore;
        bannerText.textContent = 'Player Wins!';
    } else if (result == 'computer') {
        let computerScore = parseInt(computerCount.textContent);
        computerScore += 1;
        computerCount.textContent = computerScore;
        bannerText.textContent = 'Computer Wins!';
    } else {
        bannerText.textContent = "It's a Draw";
    }
}