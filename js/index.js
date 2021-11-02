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

console.log(computerPlay());