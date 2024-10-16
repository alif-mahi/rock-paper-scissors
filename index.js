function getUserInput() {
    let userInput = prompt("Please choose your move: Rock, Paper or Scissors", "");
    return userInput;
}

// for this min will be 0 and max will be 2
const moves = ["Rock", "Paper", "Scissors"]

function getRandomResponse(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameRound() {
    let aiResponse = moves[getRandomResponse(0, 1)];
    let userInput = getUserInput();

    if (aiResponse == "Rock" && userInput == "Paper") {
        console.log("Paper beats Rock.\nYou Win !!!");
    } else if (aiResponse == "Paper" && userInput == "Scissors") {
        console.log("Scissors beat Paper.\nYou Win !!!");
    } else if (aiResponse == "Scissors" && userInput == "Rock") {
        console.log("Rock beats Scissors.\nYou Win !!!");
    } else if (aiResponse == "Rock" && userInput == "Scissors") {
        console.log("Rock beats Scissors.\nYou Lost !!!");
    } else if (aiResponse == "Paper" && userInput == "Rock") {
        console.log("Paper beats Rock.\nYou Lost !!!");
    } else if (aiResponse == "Scissors" && userInput == "Paper") {
        console.log("Scissors beats Paper.\nYou Lost !!!");
    } else {
        console.log("Its a Draw. Better luck next time");
    }
    
}

gameRound();

