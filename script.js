// Create the function that chooses randomly for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}

// Create the function that gets the human choice
function getHumanChoice() {
    let choice = prompt("Please enter your choice:");
    return choice.toLowerCase();
}

// Initilize the score variables and set their defualt value to 0
let humanScore = 0;
let computerScore = 0;

// Create the function to play one round
function playRound(humanChoice, computerChoice) {
    const choices = ["rock", "paper", "scissors"];
    if (!choices.includes(humanChoice) || humanChoice === ""){
        const answer = console.log(`Please enter a valid choice!`);
        return answer;
    };

    if(humanChoice === computerChoice){
        console.log(`It's a tie!`)
    }else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        computerScore++;
    }else {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        humanScore++;
    };
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);