function getComputerChoice() {
    const choiceArr = ["rock", "paper", "scissors"];
    return choiceArr[getRandomInt(choiceArr.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    const rpsMap = new Map([
        ['rock', 'paper'],
        ['scissors', 'rock'], 
        ['paper', 'scissors']
    ]);

    if (playerSelection === computerSelection) {
        console.log(`You both picked ${playerSelection}! it's a tie!`);
        return -1;
    }

    if (rpsMap.get(playerSelection) === computerSelection) {
        
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return 0;
        //return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
        //return `You win! ${playerSelection} beats ${computerSelection}` 
    }


}

function playGame() {
    let computerScore, playerScore;
    computerScore = playerScore = 0;

    console.log("let's play Rock Paper Scissors!")
 ayerScore != 5) {
        result = playRound(prompt("Please enter choice:").toLowerCase(), getComputerChoice()); 
        if (result == 1) {
            playerScore++;
        } else if(result == 0) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win! :)")
    
    }
    else {
        console.log("You lose! :(")
    }
}

let result;
do {
    playGame();
    do {
        result = prompt("Play again? Y for yes, N for no").toUpperCase();     
    } while (result !=="Y" && result !== "N")
    
} while (result === "Y")

console.log("Goodbye!")