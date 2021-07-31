//Define Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Define Score variable
let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Select button, then on click, do something
document.querySelector('.check').addEventListener('click', function () {
  //Define the number that the user entered as an actual number, instead of a string
  let guess = Number(document.querySelector('.guess').value);

  /*
    GAME LOGIC
        - If the user leaves the field empty, send a warning message
        - If the user guesses the secret number correctly, display a congrats message, and change the background color!
        - If the guess is higher OR lower than the secret number, decrease a point of the score
  */
  if (!guess) {
    displayMessage('No Number! ⛔');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 💥 ');
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
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
