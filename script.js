"use strict";

const maxRange = Number(
  prompt("enter a number for the maximum range, for example 20")
);
console.log(typeof maxRange);

const randomNumber = function (max) {
  return Math.trunc(Math.random() * max) + 1;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = randomNumber(maxRange);
let score = maxRange;
let highScore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".between").textContent = `Between 1 and ${maxRange}`;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = maxRange;
  secretNumber = randomNumber(maxRange);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
