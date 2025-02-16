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

// Create a function to play the game in a loop
function playGame() {

    // Initilize the score variables and set their defualt value to 0
    let humanScore = 0;
    let computerScore = 0;

    // Initialize a boolean to be used in the while loop
    let stillRunning = true;

    // Create the function to play one round
    function playRound(humanChoice, computerChoice) {
        const choices = ["rock", "paper", "scissors"];

        if (!choices.includes(humanChoice) || humanChoice === ""){
            const answer = console.log(`Please enter a valid choice!`);
            return answer;
        };

        if(humanChoice === computerChoice){
            console.log(`It's a tie!`);
            console.log(`User's score is: ${humanScore}`);
            console.log(`Computer score is: ${computerScore}`);
            console.log("*********************");
        }else if ((humanChoice === "rock" && computerChoice === "paper") 
                || (humanChoice === "paper" && computerChoice === "scissors") 
                || (humanChoice === "scissors" && computerChoice === "rock")) {
                    computerScore++;
                    console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
                    console.log(`User's score is: ${humanScore}`);
                    console.log(`Computer score is: ${computerScore}`);
                    console.log("*********************");
            
        }else {
            humanScore++;
            console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
            console.log(`User's score is: ${humanScore}`);
            console.log(`Computer score is: ${computerScore}`);
            console.log("*********************");
        };

        if (humanScore === 5 || computerScore === 5){
            console.log(`Thank you for playing! Final score is: 
                User's score: ${humanScore} points
                Computer's score: ${computerScore} points`)
            stillRunning = false;
        }
    }

    while(stillRunning){
        playRound(getHumanChoice(), getComputerChoice());
    }
    
}

playGame();
