'use strict';

let weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let monthsRu = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function getDayOfWeekRu(currentDate) {  
  return weekDays[currentDate.getDay()].substring(0, 1).toUpperCase() + weekDays[currentDate.getDay()].substring(1);
}

function getHourRu(hour) {
  let arrayHourOne = [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // часов
  let arrayHourTwo = [1, 21]; // час
  let arrayHourThree = [2, 3, 4, 22, 23];  // часа
  let hourReturn = '';
  if (arrayHourOne.includes(hour)) {
    hourReturn = 'часов';
  } else if (arrayHourTwo.includes(hour)) {
    hourReturn = 'час';
  } else if (arrayHourThree.includes(hour)) {
    hourReturn = 'часа';
  }
  return hourReturn;
}

function getMinuteRu(minute) {
  let arrayMinuteOne = [1, 21, 31, 41, 51]; // минута
  let arrayMinuteTwo = [2, 3, 4, 22, 23, 24, 32, 33 , 34, 42, 43, 44, 52, 53, 54];  // минуты
  let minuteReturn = '';
  if (arrayMinuteOne.includes(minute)) {
    minuteReturn = 'минута';
  } else if (arrayMinuteTwo.includes(minute)) {
    minuteReturn = 'минуты';
  } else {
    minuteReturn = 'минут';
  }
  return minuteReturn;
}

function getSecondRu(second) {
  let arraySecondOne = [1, 21, 31, 41, 51]; // секунда
  let arraySecondTwo = [2, 3, 4, 22, 23, 24, 32, 33 , 34, 42, 43, 44, 52, 53, 54];  // секунды
  let secondReturn = '';
  if (arraySecondOne.includes(second)) {
    secondReturn = 'секунда';
  } else if (arraySecondTwo.includes(second)) {
    secondReturn = 'секунды';
  } else {
    secondReturn = 'секунд';
  }
  return secondReturn;
}

function addValue(param) {  
  return (param < 10) ? '0' + param : param;
}

let dateLongPoint = document.getElementById('date-long');
let dateShortPoint = document.getElementById('date-short');

let today = new Date();
let dayOfWeek = weekDays[today.getDay()];
let dayOfMonthA = today.getDate();
let currentMonth = monthsRu[today.getMonth()];

let weekDayRu = getDayOfWeekRu(today);
let hourRu = getHourRu(today.getHours());
let minuteRu = getMinuteRu(today.getMinutes());
let secondRu = getSecondRu(today.getSeconds());

let dateRuLong = '';
let dateRuShort = '';

function getTimeRu(dateTimeLong, dateTimeShort) {  
  dateLongPoint.innerHTML = dateTimeLong;
  dateShortPoint.innerHTML = dateTimeShort;
}

// запуск таймера
let timerId = setInterval(function () {
  today = new Date();
  dayOfWeek = weekDays[today.getDay()];
  dayOfMonthA = today.getDate();
  currentMonth = monthsRu[today.getMonth()];

  weekDayRu = getDayOfWeekRu(today);
  hourRu = getHourRu(today.getHours());
  minuteRu = getMinuteRu(today.getMinutes());
  secondRu = getSecondRu(today.getSeconds());

  dateRuLong = `Сегодня ${weekDayRu}, ${dayOfMonthA} ${currentMonth} ${today.getFullYear()} года, ${today.getHours()} ${hourRu} ${today.getMinutes()} ${minuteRu} ${today.getSeconds()} ${secondRu}`;
  dateRuShort = `${addValue(today.getDate())}.${addValue(today.getMonth() + 1)}.${today.getFullYear()} - ${addValue(today.getHours())}.${addValue(today.getMinutes())}.${addValue(today.getSeconds())}`;

  getTimeRu(dateRuLong, dateRuShort);
}, 1000);
