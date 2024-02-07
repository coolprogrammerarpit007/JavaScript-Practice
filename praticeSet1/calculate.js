`use strict`;

let num1 = 8;
let num2 = 2;

const num1El = document.getElementById(`num1-el`);
const num2El = document.getElementById(`num2-el`);
const sumEl = document.getElementById(`sum-el`);

const addBtn = document.getElementById(`add`);
const subBtn = document.getElementById(`sub`);
const divBtn = document.getElementById(`div`);
const mulBtn = document.getElementById(`mul`);
num1El.textContent = num1;
num2El.textContent = num2;
let total = 0;

addBtn.addEventListener(`click`, add);
subBtn.addEventListener(`click`, sub);
divBtn.addEventListener(`click`, div);
mulBtn.addEventListener(`click`, mul);

function add() {
  // console.log(`Add Btn Clicked!`);
  total = 0;
  total = num1 + num2;
  sumEl.textContent = `Sum: ` + total;
  // sumEl.textContent = ``;
}
function sub() {
  // console.log(`Sub Btn Clicked!`);
  total = 0;
  total = num1 - num2;
  sumEl.textContent += total;
  sumEl.textContent = `Sum: ` + total;
  // sumEl.textContent = ``;
}
function div() {
  // console.log(`Divide Btn Clicked!`);
  total = 0;
  total = num1 / num2;
  sumEl.textContent += total;
  sumEl.textContent = `Sum: ` + total;
  // sumEl.textContent = ``;
}
function mul() {
  // console.log(`Multiply Btn Clicked!`);
  total = 0;
  total = num1 * num2;
  sumEl.textContent += total;
  sumEl.textContent = `Sum: ` + total;
  // sumEl.textContent = ``;
}
