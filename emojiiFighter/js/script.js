`use strict`;

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

const stageEl = document.getElementById(`stage`);
const fightBtn = document.getElementById(`fightButton`);

const randomFighter = function () {
  // console.log(`clicked`);
  let num1 = Math.floor(Math.random() * fighters.length) + 1;
  // console.log(num1);
  let num2 = Math.floor(Math.random() * fighters.length) + 1;
  console.log(num1);
  console.log(num2);
  stageEl.textContent = `${fighters[num1 - 1]} vs ${fighters[num2 - 1]}`;
};
fightBtn.addEventListener(`click`, randomFighter);
