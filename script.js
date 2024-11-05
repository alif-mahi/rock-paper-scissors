const moves = ['Rock', 'Paper', 'Scissors'];
const playerCount = document.getElementById('playerScoreNum');
const computerCount = document.getElementById('computerScoreNum');
const playerImage = document.querySelector('.playerScore img');
const computerImage = document.querySelector('.computerScore img');
const bannerText = document.querySelector('.header h2');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const newMatch = document.querySelector('button');

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

rockButton.addEventListener('click', () => {
    scoreCheck('Rock');
})

paperButton.addEventListener('click', () => {
    scoreCheck('Paper');
})

scissorsButton.addEventListener('click', () => {
    scoreCheck('Scissors');
})

function scoreCheck(move) {
    let playerScore = parseInt(playerCount.textContent);
    let computerScore = parseInt(computerCount.textContent);
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            bannerText.textContent = "You Win!\nPlease start a new match";
        } else {
            bannerText.textContent = "You Lost!\nPlease start a new match";
        }
    } else {
        playRound(move);
    }
}

newMatch.addEventListener('click', () => {
    computerCount.textContent = 0;
    playerCount.textContent = 0;
    bannerText.textContent = 'First to reach 5 wins';
    playerImage.src = 'images/' + playerMove.toLowerCase() + '.png';
    computerImage.src = 'images/' + computerMove.toLowerCase() + '.png';
})