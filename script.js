
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

