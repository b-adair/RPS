
function getComputerChoice() {
    let computerRandom = Math.random();
    
    if (computerRandom <= 0.33) {
        return "Rock";
    } else if (computerRandom >= 0.66) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function getHumanChoice() {
    let humanString = prompt("Please enter \"rock\", \"paper\", or \"scissors\"");
    let fixedString = humanString.replace(/[^a-zA-Z]/g, '').toLowerCase().replace(/^./, char => char.toUpperCase());
    return fixedString;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Paper" && computerChoice === "Rock") || 
        (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score after round ${i + 1}: You - ${humanScore}, Computer - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lost!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();