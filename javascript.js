//Accessing the buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const tieResults = document.querySelector("#tie-result");

//Keep track of the round results
let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

//Grabs the computers choice by random
function getComputerChoice() {
  let pick = ["rock", "paper", "scissors"];
  return pick[Math.floor(Math.random() * pick.length)];
}

//Grabs the players choice when they press one of the buttons
rockButton.addEventListener('click', function(){
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    console.log ("You chose " + playerSelection);
    console.log ("Computer chose " + computerSelection);
    console.log (playRound(playerSelection, computerSelection));
});
paperButton.addEventListener('click', function(){
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    console.log ("You chose " + playerSelection);
    console.log ("Computer chose " + computerSelection);
    console.log (playRound(playerSelection, computerSelection));
})
scissorsButton.addEventListener('click', function(){
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  console.log ("You chose " + playerSelection);
  console.log ("Computer chose " + computerSelection);
  console.log (playRound(playerSelection, computerSelection));
})

//Plays a round and returns the result
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return tieWin();
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return playerWin();
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return computerWin();
  } else {
    return "Invalid input";
  }
}

//Player, computer and tie functions
function playerWin() {
  ++playerWinAmount;
  playerScore.innerHTML = "Your score: " + playerWinAmount;
  if (playerWinAmount === 5){
    alert("YOU WIN!")
    reset();
  }
}
function computerWin() {
  ++computerWinAmount;
  computerScore.innerHTML = "Computer score: " + computerWinAmount;
  if (computerWinAmount === 5){
    alert("YOU LOSE!")
    reset();
  }
}
function tieWin() {
  ++tieAmount;
  tieResults.innerHTML = "Ties: " + tieAmount;
}

//Resets the game
function reset(){
  playerScore.innerHTML = "Your score: 0";
  computerScore.innerHTML = "Computer score: 0";
  tieResults.innerHTML = "Ties: 0";
}