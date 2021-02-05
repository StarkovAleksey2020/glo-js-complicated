'use strict';
const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const weekWrapperPoint = document.getElementById("weekWrapper");
const weekListPoint = document.getElementById("weekListPoint");
const currentWeekDayIndex = new Date().getDay();

function addWeekList(weekArray, pointParent, pointOriginal, currentDay) {  
  weekArray.forEach((element, index) => {
    let dayOfWeek = document.createElement("div");
    
    if (index > 0 && index < 6) {
      dayOfWeek.innerHTML = `<span class="week-day">${element}</span>`;
    } else {
      dayOfWeek.innerHTML = `<span class="week-day-off">${element}</span>`;
    }

    if (index === currentDay) {
      dayOfWeek.classList.add("week-today");
    }

    pointParent.insertBefore(dayOfWeek, pointOriginal.firstChild);
  });
}
addWeekList(week, weekWrapperPoint, weekListPoint, currentWeekDayIndex);