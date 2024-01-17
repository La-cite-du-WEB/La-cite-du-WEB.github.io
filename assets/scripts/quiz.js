// ----- Imports -----
import { accounts } from "./accounts.js";

// ----- Variables -----
let name;

// DOM elements
const img = document.querySelector('#question img');
const answer = document.querySelector('#question input');
const submit = document.querySelector('#question button');

// ----- Functions -----
// Get a random image
function getImage() {
  const colorList = ['bomb', 'munc', 'norw', 'ocic', 'ragd'];

  let color = colorList[Math.floor(Math.random() * colorList.length)];
  name = accounts.find(account => account.breed === color).name;
  console.log(name);

  img.src = `../../assets/imgs/cats/color/${color}/${Math.floor(Math.random() * 10) + 1}.webp`;
  console.log(img.src);
}

// Check if answer is correct
function checkAnswer() {
  if (answer.value.toLowerCase() === name.toLowerCase()) {
    alert('Correct!');
    answer.value = '';
    getImage();
  } else {
    alert('Wrong!');
  }
}

// ----- Event Listeners -----
// Display a random image on page load
document.addEventListener('DOMContentLoaded', getImage);

// Check answer when submit button is clicked or enter is pressed
submit.addEventListener('click', checkAnswer);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') checkAnswer();
});