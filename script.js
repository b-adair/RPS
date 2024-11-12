function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum <= 0.33) return "Rock";
    else if (randomNum >= 0.66) return "Scissors";
    else return "Paper";
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let message = "";

    if (playerSelection === computerSelection) {
        message = `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        message = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        message = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    document.getElementById("score").textContent = `Player: ${playerScore}
    | Computer: ${computerScore}`;
    document.getElementById("message").textContent = message;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ?
        "You win the game!" : "Computer wins the game!";
        document.getElementById("message").textContent = winner;

        playerScore = 0;
        computerScore = 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btnmenu');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            playRound(event.target.id);
        });
    });
});

