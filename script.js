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
