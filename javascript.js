humanScore = 0;
computerScore = 0;
let resulttext = "";

function getComputerChoice() {
  const x = Math.random();
  if (x < 0.33) {
    return "Rock";
  } else if (x < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resulttext = "Tie Game!!";
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    resulttext = "You Lose! Paper beats Rock!";
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    resulttext = "You Win! Rock beats Scissors!";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    resulttext = "You Win! Paper beats Rock!";
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    resulttext = "You Lose! Scissors beats Paper!";
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    resulttext = "You Lose! Rock beats Scissors!";
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    resulttext = "You Win! Scissors beats Paper!";
    humanScore++;
  }
}

// Ensure JavaScript Runs After the DOM is Loaded
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  const resultContainer = document.querySelector("#result");

  // Function to handle score display
  const updateScores = () => {
    const container = document.querySelector("#score");

    // Clear existing scores before appending new ones
    container.innerHTML = "";

    const humanScoreElement = document.createElement("div");
    humanScoreElement.classList.add("score");
    humanScoreElement.style.fontSize = "50px";
    if (humanScore > computerScore) {
      humanScoreElement.style.color = "green";
    }
    humanScoreElement.textContent = "Human Score: " + humanScore;

    const computerScoreElement = document.createElement("div");
    computerScoreElement.classList.add("score");
    computerScoreElement.style.fontSize = "50px";
    if (computerScore > humanScore) {
      computerScoreElement.style.color = "green";
    }
    computerScoreElement.textContent = "Computer Score: " + computerScore;

    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = resulttext;

    // Append the scores
    container.appendChild(humanScoreElement);
    container.appendChild(computerScoreElement);
    resultContainer.innerHTML = "";
    resultContainer.appendChild(result);
  };
  // Attach event listeners for each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
      updateScores(); // Update score display after each round
    });
  });
});

// PlayGame();
