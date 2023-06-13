// return a computer choice at random
let choices = ["rock", "paper", "scissors"];

function getCOmputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
}

getCOmputerChoice();
