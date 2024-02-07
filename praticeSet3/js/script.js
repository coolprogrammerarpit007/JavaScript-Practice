`use strict`;

// challenge 1:-

const player = `Arpit`;
const opponent = `Per`;
const game = `Amazing Fighter`;
let points = 0;
let hasWon = false;

// playing the game

points += 100;
hasWon = true;

// Announcing the winner

if (hasWon) {
  console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
  console.log(`The winner is: ${opponent}! ${player} lost the game`);
}

// Challenge2

console.log(`***************************************`);

const myCourses = [
  `Learn CSS Animations`,
  `UI Design Fundametals`,
  `Intro to clean code`,
];

const myCourse = function (courses) {
  for (let i = 0; i < courses.length; i++) {
    console.log(`Course${i + 1}: ${courses[i]}`);
  }
};
myCourse(myCourses);

// Challenge 3

console.log(`****************************`);

const arr = [56, 78, 89, 56, 256, `Arpit`, `Novak`, `Virat`];

// saving value to local storage
const localValue = localStorage.setItem(`myArray`, JSON.stringify(arr));

// getting value from the local storage
// console.log(JSON.parse(localStorage.getItem(`myArray`)));

console.log(`************`);
// challenge 4

const data = [
  {
    player: `Jane`,
    score: 52,
  },
  {
    player: `Mark`,
    score: 41,
  },
];

function checkScore() {
  console.log(data[0][`score`]);
}

const btn = document.getElementById(`btn`);
btn.addEventListener(`click`, checkScore);

console.log(`****************************`);

// challenge 5

function generateSentence(desc, arr) {
  let length = arr.length;
  let arrDesc = ``;
  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      arrDesc += arr[i];
    } else {
      arrDesc += arr[i] + `, `;
    }
  }
  let sentence = `The ${length} ${desc} are ${arrDesc}`;
  return sentence;
}

console.log(generateSentence("largest countries", ["China", "India", "USA"]));

console.log(`***************************************`);

// Challenge 6

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const container = document.getElementById(`container`);

function renderImg() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt="Employee Photo" src="${imgs[i]}" class="team-img">`;
  }
  container.innerHTML = imgsDOM;
}

renderImg();

console.log(`***********************`);

// challenge 7:-

const totalPrice = "420.69235632455";
const purchaseBtn = document.getElementById(`purchase-btn`);
purchaseBtn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`;
