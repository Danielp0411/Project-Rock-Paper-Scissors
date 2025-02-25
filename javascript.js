humanScore = 0;
computerScore = 0;

function getComputerChoice() {
  const x = Math.random();
  if (x < 0.3) {
    console.log("Computer: Rock");
    return "Rock";
  } else if (x < 0.6) {
    console.log("Computer: Paper");
    return "Paper";
  } else {
    console.log("Computer: Scissors");
    return "Scissors";
  }
}

function getHumanChoice() {
  let x = prompt("Please type 'Rock', 'Paper', or 'Scissors'");
  console.log("Human: " + x);
  return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase(); // Ensures first letter is capitalized
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie Game!!");
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You Lose! Paper beats Rock!");
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You Win! Rock beats Scissors!");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You Win! Paper beats Rock!");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You Lose! Scissors beats Paper!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You Lose! Rock beats Scissors!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You Win! Scissors beats Paper!");
    humanScore++;
  }
}

function PlayGame() {
  let i = 1;
  while (i <= 5) {
    // Corrected the loop condition to run 5 times
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    i++;
  }
}

PlayGame();
