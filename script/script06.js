'use strict';
// LESSON 02
let num = 266219;
let numArray = num.toString().split('');
let result = 1;

for (let index = 0; index < numArray.length; index++) {
  result *= Number(numArray[index]);
}
console.log('Multiplication result: ', result);
console.log('The result of raising to the power of 3', result ** 3);
console.log('First two characters: ', (result ** 3).toString().substr(0,2));

const reducer = (accumulator, currentValue) => accumulator * currentValue;
console.log('Multiplication result with reduce: ', numArray.reduce(reducer));

// LESSON 03
let weekDays = [];
weekDays[0] = document.getElementById("lang-week-item--monday");
weekDays[1] = document.getElementById("lang-week-item--tuesday");
weekDays[2] = document.getElementById("lang-week-item--wednesday");
weekDays[3] = document.getElementById("lang-week-item--thursday");
weekDays[4] = document.getElementById("lang-week-item--friday");
weekDays[5] = document.getElementById("lang-week-item--saturday");
weekDays[6] = document.getElementById("lang-week-item--sunday");

let weekArrayRu = [
  { key: 0, name: "Понедельник" },
  { key: 1, name: "Вторник" },
  { key: 2, name: "Среда" },
  { key: 3, name: "Четверг" },
  { key: 4, name: "Пятница" },
  { key: 5, name: "Суббота" },
  { key: 6, name: "Воскресенье" }
];

let weekArrayEn = [
  { key: 0, name: "Monday" },
  { key: 1, name: "Tuesday" },
  { key: 2, name: "Wednesday" },
  { key: 3, name: "Thursday" },
  { key: 4, name: "Friday" },
  { key: 5, name: "Saturday" },
  { key: 6, name: "Sunday" }
];

function chooseLanguage(lang, mode) {
  let weekBlock = document.getElementsByClassName("lang-week-block");
  weekBlock[0].classList.add("visible");

  if (mode === 'if') {
    weekBlock[0].classList.remove("green");
    weekBlock[0].classList.add("red");
    if (lang === "ru") {
      weekDays[0].innerHTML = "понедельник";
      weekDays[1].innerHTML = "вторник";
      weekDays[2].innerHTML = "среда";
      weekDays[3].innerHTML = "четверг";
      weekDays[4].innerHTML = "пятница";
      weekDays[5].innerHTML = "суббота";
      weekDays[6].innerHTML = "воскресенье";
    } else if (lang === "en") {
      weekDays[0].innerHTML = "monday";
      weekDays[1].innerHTML = "tuesday";
      weekDays[2].innerHTML = "wednesday";
      weekDays[3].innerHTML = "thursday";
      weekDays[4].innerHTML = "friday";
      weekDays[5].innerHTML = "saturday";
      weekDays[6].innerHTML = "sunday";
    }
  } else if (mode === 'switch') {
    weekBlock[0].classList.remove("red");
    weekBlock[0].classList.add("green");
    switch (lang) {
      case "ru":
        weekDays[0].innerHTML = "понедельник";
        weekDays[1].innerHTML = "вторник";
        weekDays[2].innerHTML = "среда";
        weekDays[3].innerHTML = "четверг";
        weekDays[4].innerHTML = "пятница";
        weekDays[5].innerHTML = "суббота";
        weekDays[6].innerHTML = "воскресенье";
        break;
      case "en":
        weekDays[0].innerHTML = "monday";
        weekDays[1].innerHTML = "tuesday";
        weekDays[2].innerHTML = "wednesday";
        weekDays[3].innerHTML = "thursday";
        weekDays[4].innerHTML = "friday";
        weekDays[5].innerHTML = "saturday";
        weekDays[6].innerHTML = "sunday";
        break;
      default:
        break;
    }
  }
}
function chooseLanguageRu() {
  let weekBlock = document.getElementsByClassName("lang-week-block");
  weekBlock[0].classList.add("visible");
  weekBlock[0].classList.remove("red");
  weekBlock[0].classList.remove("green");
  for (let index = 0; index < weekDays.length; index++) {
    weekDays[index].innerHTML = weekArrayRu[index].name;
  }
}
function chooseLanguageEn() {
  let weekBlock = document.getElementsByClassName("lang-week-block");
  weekBlock[0].classList.add("visible");
  weekBlock[0].classList.remove("red");
  weekBlock[0].classList.remove("green");
  for (let index = 0; index < weekDays.length; index++) {
    weekDays[index].innerHTML = weekArrayEn[index].name;
  }
}
