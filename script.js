// Create the function that chooses randomly for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}

// Create the function that gets the human choice
function getHumanChoice() {
    let choice = prompt("Please enter your choice:");
    return choice;
}

