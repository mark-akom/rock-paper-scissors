let playerScore = 0;
let computerScore = 0;

const playerSelectionButtons = document.querySelectorAll('button.player-selection');
const gameOutcome = document.querySelector('div.outcome');
const playerScoreDisplay = document.querySelector('p.player-score');
const computerScoreDisplay = document.querySelector('p.cpu-score');
const gameRuns = document.querySelector('p.game-runs-number');

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


const resetAll = () => {
    
    let roundWinner = playerScore === 5 ? 'Player' : 'Computer';
    gameOutcome.textContent = `${roundWinner} wins this round. Play another game. Score: Player - (${playerScore}) Computer - (${computerScore})`;
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    gameRuns.textContent = 0;
}

const writeToUi = (whoWins) => {
    gameOutcome.textContent = whoWins;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

playerSelectionButtons.forEach(playerSelection => {
    playerSelection.addEventListener('click', (e) => {
        gameRuns.textContent = Number(gameRuns.textContent) + 1;
        const button = e.target;
        let playerChoice = button.textContent;
        let whoWins = playRound(playerChoice, computerPlay());
        writeToUi(whoWins);
        if (playerScore === 5 || computerScore === 5) {
            resetAll();
        }
    })
});