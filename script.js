// Create the function that chooses randomly for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}

