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
                console.log("It's a tie!");
                break;
            case "paper":
                console.log("You lose! Paper beats Rock");
                return "lost";
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors!");
                return "won";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                console.log("You win! Paper beats Rock");
                return "won";
                break;
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                console.log("You lose! Scissors beat Paper");
                return "lost";
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                console.log("You lose! Rock beats Scissors");
                return "lost";
                break;
            case "paper":
                console.log("You win! Scissors beat Paper");
                return "won";
                break;
            case "scissors":
                return "It's a tie!";
                break;
        }
    }
}