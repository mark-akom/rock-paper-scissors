let playerScore = 0;
let computerScore = 0;

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
        if(computerSelection === 'scissors') { // computer selection will either be scissors or paper
            message = 'You win, Rock beats Scissors';
            playerScore += 1;
        } else {
            message = 'You lose, Paper beats Rock';
            computerScore += 1;
        }
        return message;
    } else if (playerSelection === 'paper') { // computer selection will either be rock or scissors
        if (computerSelection === 'rock') {
            message = 'You win, Paper beats Rock';
            playerScore += 1;
        } else {
            message = 'You lose, Scissors beats Paper';
            computerScore += 1;
        }
        return message;
    } else { // user selection is scissors
        if(computerSelection === 'paper') { // computer selection wil either be paper or rock
            message = 'You win, Scissors beats Paper';
            playerScore += 1;
        } else {
            message = 'You lose, Rock beats Scissors'
            computerScore += 1;
        }
        return message;
    }
}

function findWinner() {
    if (playerScore > computerScore) {
        console.log(`Player wins the game. Score: ${playerScore} : ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`Computer wins the game. Score: ${computerScore} : ${playerScore}`)
    } else {
        console.log(`This game was a draw. Score: ${playerScore} : ${computerScore}`);
    }
}


function game() {
    
    
    findWinner();
}

