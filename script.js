function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
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

function decideWinner(playerScore, computerScore) {
    console.log(`The score is ${playerScore}:${computerScore}`);
    if (playerScore > computerScore) {
        console.log("The Player wins!");
    } else if (playerScore < computerScore) {
        console.log("The Computer wins!");
    } else {
        console.log("The game ended in a tie!");
    }
}

// Write a function that plays a 5 round game and keeps score and reports a winner or loser at the end
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound((getPlayerChoice()), getComputerChoice());

        if (result === "won") {
            playerScore++;
        } else if (result === "lost") {
            computerScore++;
        }
    }

    decideWinner(playerScore, computerScore);
}

game();