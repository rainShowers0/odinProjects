// The "AI" chooses its 
function computerPlay() {

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
  
  const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));