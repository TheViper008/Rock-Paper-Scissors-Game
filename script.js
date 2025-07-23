let playerScore = 0;
let computerScore = 0;

const choices = {
  rock: { emoji: "🪨", beats: "scissors" },
  paper: { emoji: "📄", beats: "rock" },
  scissors: { emoji: "✂️", beats: "paper" },
};

function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  return choiceArray[Math.floor(Math.random() * 3)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "tie";
  if (choices[playerChoice].beats === computerChoice) return "player";
  return "computer";
}

function updateDisplay(playerChoice, computerChoice, result) {
  document.getElementById("playerChoice").textContent =
    choices[playerChoice].emoji;
  document.getElementById("computerChoice").textContent =
    choices[computerChoice].emoji;

  const resultMessage = document.getElementById("resultMessage");

  if (result === "tie") {
    resultMessage.textContent = "It's a tie!";
    resultMessage.className = "text-lg font-semibold text-yellow-600";
  } else if (result === "player") {
    resultMessage.textContent = "You win this round!";
    resultMessage.className = "text-lg font-semibold text-green-600";
    playerScore++;
  } else {
    resultMessage.textContent = "Computer wins this round!";
    resultMessage.className = "text-lg font-semibold text-red-600";
    computerScore++;
  }

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateDisplay(playerChoice, computerChoice, result);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";
  document.getElementById("playerChoice").textContent = "❓";
  document.getElementById("computerChoice").textContent = "❓";
  const resultMessage = document.getElementById("resultMessage");
  resultMessage.textContent = "Make your choice!";
  resultMessage.className = "text-lg font-semibold text-gray-700";
}
