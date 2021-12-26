// The "AI" chooses its 
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let selection = Math.random() * 100;
    if (selection <= 33) {
        return "rock"
    } else if (selection > 33 && 66 >= selection) {
        return "paper"
    } else {
        return "scissors"
    }
}
// Checks who won
function playRound(playerSelection, computerSelection) {
    // Rock beats scissors, Player gets 1 point  ROCK
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        console.log("Rock beats scissors, you win")
    } // TIE
    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Its a tie!")
    } // Rock loses to paper, Computer gets 1 point 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        console.log(" Rock loses to paper, you lose")
    } // Paper beats rock, Player gets 1 point   PAPER
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        console.log("Paper beats rock, you win");
    } // TIE
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie")
    } // Paper loses to scissors, Computer gets 1 point
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        console.log("Paper loses to scissors, you lose");
    } // Scissors beat paper, Player gets 1 point   Scissors
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        console.log("Scissors beat paper, you win")
    } // TIE
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie")
    } // Scissors lose to rock, Computer gets 1 point
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        console.log("Scissors lose to rock, you lose")
    }
} 
function game() {
      // I don't know loop yet lolol
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
    playRound(playerSelection, computerSelection);
    computerSelection = computerPlay();
    playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
    playRound(playerSelection, computerSelection);
    computerSelection = computerPlay();
    playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
    playRound(playerSelection, computerSelection);
    computerSelection = computerPlay();
    playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
    playRound(playerSelection, computerSelection);
    computerSelection = computerPlay();
    playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
    playRound(playerSelection, computerSelection);
// To check who is the final winner by comparing scores
    if (playerScore == computerScore) {
        console.log("You tied with the computer")
    } else if (computerScore > playerScore) {
        console.log("The Computer won :( ")
    } else {
        console.log("You won")
    }
}
game();
