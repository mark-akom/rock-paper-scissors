function computerPlay() {
    let computerSelection;
    let randomNumber = (Math.floor(Math.random()* 3) + 1 )

    if (randomNumber === 1) {
        computerSelection = 'rock';
    } else if (randomNumber === 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }

    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let message;
    //get the outcome of the game
    if(playerSelection === computerSelection) {
        message = "It's a tie";
        return message;
    }

    if (playerSelection === 'rock') {
        if(computerSelection === 'scissors') {
            message = 'You win, Rock beats Scissors';
        } else {
            message = 'You lose, Paper beats Rock';
        }
        return message;
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            message = 'You win, Paper beats Rock';
        } else {
            message = 'You lose, Scissors beats Paper';
        }
        return message;
    } else {
        if(computerSelection === 'paper') {
            message = 'You win, Scissors beats Paper';
        } else {
            message = 'You lose, Rock beats Scissors'
        }
        return message;
    }
}

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));