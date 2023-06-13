// return a computer choice at random
let choices = ["rock", "paper", "scissors"];

function getCOmputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

/* 
user rock, computer scissors => user wins
          , computer rock => tie
          , computer paper => computer wins
user scissors, computer rock => Computer wins
              , computer scissors => tie
              , computer paper => User wins
user paper, computer scissors => computer wins
          , computer paper => tie
          , computer rock => user wins
*/

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper, Scissors");
  playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "You WIN! Rock beats Scissors.";
    } else if (computerSelection == "rock") {
      return "It's a TIE! Wanna go again?";
    } else {
      return "You LOSE! Paper beats Rock.";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You LOSE! Rock beats Scissors.";
    } else if (computerSelection == "scissors") {
      return "It's a TIE! Wanna go again?";
    } else {
      return "Yu WIN! Scissors beats Paper.";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "You LOSE! Scissors beats Paper.";
    } else if (computerSelection == "paper") {
      return "It's a TIE! Wanna go again?";
    } else {
      return "You WIN! Paper beats Rock.";
    }
  } else {
    return "Enter a valid option!";
  }
}

function game() {
  let rounds = 5;
  for (let i = 1; i <= 5; i++) {
    alert(playRound());
  }
}

game();
