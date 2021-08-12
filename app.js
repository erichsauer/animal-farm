// import functions and grab DOM elements
const horseImg = document.getElementById('horse-img');
const catImg = document.getElementById('cat-img');
const dogImg = document.getElementById('dog-img');
const horseWav = document.getElementById('horse-wav');
const catWav = document.getElementById('cat-wav');
const dogWav = document.getElementById('dog-wav');

const playAnimalSound = (animalImg, animalWav) => animalImg.addEventListener('click', () => animalWav.play());
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
playAnimalSound(horseImg, horseWav);
playAnimalSound(catImg, catWav);
playAnimalSound(dogImg, dogWav);