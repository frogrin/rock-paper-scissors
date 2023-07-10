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
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
    }
}
