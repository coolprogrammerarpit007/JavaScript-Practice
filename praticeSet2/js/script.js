`use strict`;

let person = {
  name: `Arpit`,
  age: 24,
  country: `India`,
};

function logData() {
  return (
    person.name +
    ` is ` +
    person.age +
    ` years old and he lives in ` +
    person.country
  );
}

// console.log(logData());

let age = 17;

// if (age < 6) {
//   console.log(`free`);
// } else if (age >= 6 && age <= 17) {
//   console.log(`child Discount`);
// } else if (age >= 18 && age <= 27) {
//   console.log(`student discount`);
// } else if (age >= 27 && age <= 66) {
//   console.log(`Full Price`);
// } else {
//   console.log(`Senior Citizen discount`);
// }

const largestCountries = [`India`, `China`, `USA`, `Indonesia`, `Pakistan`];
// for (let i = 0; i < largestCountries.length; i++) {
//   console.log(largestCountries[i]);
// }

const newLargeCountries = [`Tuvala`, `India`, `Usa`, `Indonesia`, `Monaco`];
newLargeCountries.shift();
newLargeCountries.unshift(`China`);
newLargeCountries.pop();
newLargeCountries.push(`Pakistan`);
// console.log(newLargeCountries);

let dayOfMonth = 13;
let weekDay = `Friday`;

// if (dayOfMonth === 13 && weekDay === `Friday`) {
//   console.log(`😣`);
// } else {
//   console.log(`😯`);
// }

const items = [`Rock`, `Papper`, `Scissor`];

function rollDice() {
  let random = Math.floor(Math.random() * items.length) + 1;
  let item = items[random - 1];
  return item;
}
// rollDice();
let option = rollDice();
// console.log(option);
