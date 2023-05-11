'use strict';
//
let score = 100;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 100) + 1;
//

//function for the message query selector
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//function for the click button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('❌ No Number inserted!');

    //when players wins
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//function for the Again Button
document.querySelector('.again').addEventListener('click', function () {
  ////reset parameters

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.number').style.width = '15rem';
  score = 100;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
