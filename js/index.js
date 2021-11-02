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
        if(computerSelection === 'scissors') {
            message = 'You win, Rock beats Scissors';
            playerScore += 1;
        } else {
            message = 'You lose, Paper beats Rock';
            computerScore += 1;
        }
        return message;
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            message = 'You win, Paper beats Rock';
            playerScore += 1;
        } else {
            message = 'You lose, Scissors beats Paper';
            computerScore += 1;
        }
        return message;
    } else {
        if(computerSelection === 'paper') {
            message = 'You win, Scissors beats Paper';
            playerScore += 1;
        } else {
            message = 'You lose, Rock beats Scissors'
            computerScore += 1;
        }
        return message;
    }
}


function game() {
    alert('Hi, there let\'s play rock paper scissors game')

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('What is your selection?');
        let computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log('Player wins the game')
    } else if (computerScore > playerScore) {
        console.log('Computer wins the game');
    } else {
        console.log('This game was a draw');
    }
}

game();