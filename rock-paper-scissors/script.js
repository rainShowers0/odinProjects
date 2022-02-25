let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.round(Math.random() * choices.length)];
}
// Checks who won
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    // Rock beats scissors, Player gets 1 point  ROCK
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        console.log("Rock beats scissors, you win");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // TIE
    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Its a tie!");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // Rock loses to paper, Computer gets 1 point 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        console.log(" Rock loses to paper, you lose");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // Paper beats rock, Player gets 1 point   PAPER
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        console.log("Paper beats rock, you win");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // TIE
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // Paper loses to scissors, Computer gets 1 point
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        console.log("Paper loses to scissors, you lose");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // Scissors beat paper, Player gets 1 point   Scissors
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        console.log("Scissors beat paper, you win");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // TIE
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    } // Scissors lose to rock, Computer gets 1 point
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        console.log("Scissors lose to rock, you lose");
        if (computerScore == 5) {
            document.getElementById('winner').innerHTML = "Computer Wins"
        } else if (playerScore == 5) {
            document.getElementById('winner').innerHTML = "You Win"
        }
    }
} 
    
// To check who is the final winner by comparing scores

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
        let resultComputer = `Computer Score: ${computerScore}`;
        let resultPlayer = `Player Score: ${playerScore}`;
        document.getElementById('computerScore').innerHTML = resultComputer;
        document.getElementById('playerScore').innerHTML = resultPlayer;
    })
})

