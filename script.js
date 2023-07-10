// Write a function that will randomly return "rock" "paper" "scissors"
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
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if (result.charAt(4) === "w") {
            playerScore++;
        } else if (result.charAt(4) === "l") {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }

    decideWinner(playerScore, computerScore);
}

game();