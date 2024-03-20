buttons = document.querySelectorAll("button.choice");

resultsDiv = document.querySelector('#results');

playerScoreSpan = document.querySelector('#player-score');
computerScoreSpan = document.querySelector('#computer-score');
winnerDiv = document.querySelector('#winner');
playAgainBtn = document.querySelector('#play-again');
let playerScore = 0, computerScore = 0;

const turns = 5;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.id);
        updateScores(result);
        updateScoreDisplay();

    })
})

playAgainBtn.addEventListener('click', () => {
    playerScore = computerScore = 0;
    updateScoreDisplay();
    playAgainBtn.setAttribute('style', 'display: none');
    winnerDiv.textContent = "";
    resultsDiv.textContent = "";
    enableButtons();
})



function updateScores(result) {
    if (playerScore < 5 && computerScore < 5) {
        if (result == 1) {
            playerScore++;
        } else if(result == 0) {
            computerScore++;
        }
    }
}

function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function updateScoreDisplay() {
    if (playerScore <= 5 && computerScore <= 5) {
        playerScoreSpan.textContent = `player score = ${playerScore}`
        computerScoreSpan.textContent = `computer score = ${computerScore}`;
    }
    if (playerScore >= 5 || computerScore >=5) {
        if (playerScore >= 5) {
            winnerDiv.textContent = "You won!";
        }
        else {
            winnerDiv.textContent = "You lost! 😔"
        }

        playAgainBtn.setAttribute('style', 'display: block');
        disableButtons();
    }
}

function getComputerChoice() {
    const choiceArr = ["rock", "paper", "scissors"];
    return choiceArr[getRandomInt(choiceArr.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection) {
    const rpsMap = new Map([
        ['rock', 'paper'],
        ['scissors', 'rock'], 
        ['paper', 'scissors']
    ]);

    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        resultsDiv.textContent = `You both picked ${playerSelection}! it's a tie!`;
        return -1;
    }

    if (rpsMap.get(playerSelection) === computerSelection) {
        
        resultsDiv.textContent=`You lose! ${computerSelection} beats ${playerSelection}.`;
        return 0;
        //return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else {
        resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return 1;
        //return `You win! ${playerSelection} beats ${computerSelection}` 
    }


}

