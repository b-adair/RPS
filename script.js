
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