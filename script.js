'use strict';

// //? selecting and manipulating elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //? to get value property use .value
// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

//? handeling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else {
    document.querySelector('.message').textContent = 'Number!';
  }
});
