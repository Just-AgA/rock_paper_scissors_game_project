const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
let displayResult = document.querySelector(".display-result");
const paperPlayerSelection = getHumanChoice("paper");
const rockPlayerSelection = getHumanChoice("rock");
const scissorsPlayerSelection = getHumanChoice("scissors");
const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");


// Create the function that chooses randomly for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);

    return choices[randomChoice];
}

// Create the function that gets the human choice
function getHumanChoice(choice) {
    return choice;
}

 // Initilize the score variables and set their defualt value to 0
 let humanScore = 0;
 let computerScore = 0;

// Create the function to play one round
function playRound(humanChoice, computerChoice) {
    const choices = ["rock", "paper", "scissors"];

    if(humanChoice === computerChoice){
        displayResult.innerText = `It's a tie!
                                    User's score is: ${humanScore}
                                    Computer score is: ${computerScore}`;

    }else if ((humanChoice === "rock" && computerChoice === "paper") 
            || (humanChoice === "paper" && computerChoice === "scissors") 
            || (humanChoice === "scissors" && computerChoice === "rock")) {

                computerScore++;
                displayResult.innerText = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}
                                            User's score is: ${humanScore}
                                            Computer score is: ${computerScore}`;
        
    }else {
        humanScore++;
        displayResult.innerText = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}
                                    User's score is: ${humanScore}
                                    Computer score is: ${computerScore}`;
    };

    if (humanScore === 5 || computerScore === 5){
        displayResult.innerText = `Thank you for playing! The winner after winning 5 rounds is: 
            User's score: ${humanScore} points
            Computer's score: ${computerScore} points`

            buttons.forEach(button => button.disabled = true);

        playAgainButton = document.createElement("button");
        playAgainButton.innerText = "Play Again?";
        container.appendChild(playAgainButton);

        playAgainButton.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            displayResult.innerText = "";
            playAgainButton.style.display = "none"
            buttons.forEach(button => button.disabled = false);
        })
    }

    
}


// Create event listeners for the buttons
paper.addEventListener("click", ()=>{
    playRound(paperPlayerSelection, getComputerChoice());
});

rock.addEventListener("click", ()=>{
    playRound(rockPlayerSelection, getComputerChoice());
});

scissors.addEventListener("click", ()=>{
    playRound(scissorsPlayerSelection, getComputerChoice());
});