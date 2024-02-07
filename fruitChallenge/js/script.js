`use strict`;

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

const appleShelf = document.getElementById(`apple-shelf`);
const orangeShelf = document.getElementById(`orange-shelf`);

// creating a fruit sorting function

const fruitSort = function () {
  for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
    if (fruit[i] === `🍎`) {
      appleShelf.textContent += fruit[i] + ` `;
    } else {
      orangeShelf.textContent += fruit[i] + ` `;
    }
  }
};

fruitSort();
