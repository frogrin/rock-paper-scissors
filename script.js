const result = document.querySelector(".result");

const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener('click', () => playRound('rock', getComputerChoice()));

const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener('click', () => playRound('paper', getComputerChoice()));

const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Now we have to write a function that gets a choice from the player
function getPlayerChoice() {
    choice = prompt("Your choice: ").toLowerCase();
    return choice;
}
// Then we will write a function that takes two parameters and decides on a winner and displays a message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "It's a tie!";
                break;
            case "paper":
                result.textContent = "You lose! Paper beats Rock";
                break;
            case "scissors":
                result.textContent = "You win! Rock beats Scissors!";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "You win! Paper beats Rock";
                break;
            case "paper":
                result.textContent = "It's a tie!";
                break;
            case "scissors":
                result.textContent = "You lose! Scissors beat Paper";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "You lose! Rock beats Scissors";
                break;
            case "paper":
                result.textContent = "You win! Scissors beat Paper";
                break;
            case "scissors":
                result.textContent = "It's a tie!";
                break;
        }
    }
}
