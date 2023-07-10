// Write a function that will randomly return "rock" "paper" "scissors"
    // First we need a function that will return one of 3 numbers randomly
    // Then we will have to assing each of these numbers to a text value


function random() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let num = random();
    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
    }
}

// Now we have to write a function that gets a choice from the player
    // Create a variable that gets players choice 
    // Make sure playes input is case insensitive
    // Return players choice

function getPlayerChoice() {
    choice = prompt("Your choice: ");
    choice = choice.toLowerCase();
    return choice;
}
// Then we will write a function that takes two parameters and decides on a winner and displays a message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "It's a tie!";
                break;
            case "paper":
                return "You lose! Paper beats Rock";
                break;
            case "scissors":
                return "You win! Rock beats Scissors!";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats Rock";
                break;
            case "paper":
                return "It's a tie!";
                break;
            case "scissors":
                return "You lose! Scissors beat Paper";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats Scissors";
                break;
            case "paper":
                return "You win! Scissors beat Paper";
                break;
            case "scissors":
                return "It's a tie!";
                break;
        }
    }
}
