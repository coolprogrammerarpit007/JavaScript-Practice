`use strict`;
let firstName = `Arpit`;
let lastName = `Mishra`;
let fullName = firstName + ` ` + lastName;
console.log(fullName);

let name = `Linda`;
let greeting = `Hi There`;
const greetingFunc = function () {
  const msg = greeting + `, ` + name + `!`;
  console.log(msg);
};

greetingFunc();

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}
function remove1Point() {
  myPoints -= 1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

console.log(`My Points are: ` + 5 + 9);

const btn = document.getElementById(`btn`);
const errorMsg = document.getElementById(`error`);

const errorMessage = function () {
  // console.log(`button clicked!!`);
  errorMsg.innerHTML = `Something went wrong, Please try again later `;
};

btn.addEventListener(`click`, errorMessage);
