const result = document.querySelector(".result");
const score = document.querySelector(".score");

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  // Use the value of each button as an argument for playRound
  button.addEventListener('click', (e) => playRound(e.target.value, getComputerChoice()));
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function updateScore() {
  if (playerScore > computerScore && playerScore === 5) {
    score.textContent = `The Player won with the score ${playerScore}:${computerScore}`;
  } else if (playerScore < computerScore && computerScore === 5) {
    score.textContent = `The Computer won with the score ${playerScore}:${computerScore}`;
  } else {
    score.textContent = `The score is ${playerScore}:${computerScore}`;
  }
} 
// Then we will write a function that takes two parameters and decides on a winner and displays a message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) result.textContent = "It's a tie!";
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                result.textContent = "You lose! Paper beats Rock";
                computerScore++;
                break;
            case "scissors":
                result.textContent = "You win! Rock beats Scissors!";
                playerScore++;
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "You win! Paper beats Rock";
                playerScore++;
                break;
            case "scissors":
                result.textContent = "You lose! Scissors beat Paper";
                computerScore++;
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "You lose! Rock beats Scissors";
                computerScore++;
                break;
            case "paper":
                result.textContent = "You win! Scissors beat Paper";
                playerScore++;
                break;
        }
    }

    updateScore();
}