console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber > 2 / 3) {
        return "Rock";
    } else if (randomNumber > 1 / 3) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function getHumanChoice() {
    const choice = prompt("Please choose between rock, papers or scisscors");
    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return "tie";
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        return "you win, you lucker";
    } else {
        return "you lose, you pechvogel";
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        if (playRound(humanSelection, computerSelection) === "you win, you lucker") {
            humanScore++;
        } else if (playRound(humanSelection, computerSelection) === "you lose, you pechvogel") {
            computerScore++;
        }
    }

    if (humanScore == computerScore) {
        console.log(`It is a tie. ${humanscore} - ${computerScore}`)
    } else if (humanScore > computerScore) {
        console.log(`You have won the game with ${humanScore} - ${computerScore}`);
    } else {
        console.log(`You have lost with ${humanScore} - ${computerScore}`);
    }
}