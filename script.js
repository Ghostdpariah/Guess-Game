'use strict';
const checkBtn = document.querySelector('.check');
let hiddenNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const userScore = document.querySelector('.score');
const userHighScore = document.querySelector('.highscore');
const playAgainBtn = document.querySelector('.again');
let score = 10;
let highscore = 0;

// Hide play again button
playAgainBtn.style.display = 'none';

// generating random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// lets the number show
// hiddenNumber.textContent = randomNumber;
function userLost() {
  message.textContent = 'Oops! you lost!';
  playAgainBtn.style.display = 'block';
  playAgainBtn.textContent = 'Try Again';
  checkBtn.style.display = 'none';
  score--;
  userScore.textContent = score;
}

function userWon() {
  message.textContent = 'Correct! You guessed it!';
  document.body.style.backgroundColor = '#60b347';
  playAgainBtn.style.display = 'block';
  highscore = score * 10;
  // if (highscore > score * 10) {
  //   highscore;
  // } else {
  //   score * 10;
  // }
  userHighScore.textContent = highscore;
  checkBtn.style.display = 'none';
}

checkBtn.addEventListener('click', () => {
  let guessedInput = Number(document.querySelector('.guess').value);
  if (!guessedInput) {
    message.textContent = 'Please input a number';
  } else if (guessedInput < 1 || guessedInput > 20) {
    message.textContent = 'Keep input between 1 & 20';
  } else if (guessedInput < randomNumber) {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      userScore.textContent = score;
    } else {
      userLost();
    }
  } else if (guessedInput > randomNumber) {
    if (score > 1) {
      message.textContent = 'Too High!';
      score--;
      userScore.textContent = score;
    } else {
      userLost();
    }
  } else if (guessedInput === randomNumber) {
    userWon();
    hiddenNumber.textContent = guessedInput;
  }
});

playAgainBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  hiddenNumber.textContent = '?';
  score = 10;
  userScore.textContent = score;
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  playAgainBtn.style.display = 'none';
  checkBtn.style.display = 'block';
  document.querySelector('.guess').value = '';
});
