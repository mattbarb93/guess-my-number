// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 24;

//Define Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Define Score variable
let score = 20;

//Select button, then on click, do something
document.querySelector('.check').addEventListener('click', function () {
  //Define the number that the user entered as an actual number, instead of a string
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /*
    GAME LOGIC
        - If the user leaves the field empty, send a warning message
        - If the user guesses the secret number correctly, display a congrats message, and change the background color!
        - If the guess is higher than the secret number, decrease a point of the score
        - If the guess is lower than the secret number, decrease a point of the score
  */
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'Too High! ';

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥 ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥 ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
Again button functionality
*/

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
