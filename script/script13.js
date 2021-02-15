'use strict';
// Экранные элементы
const colorTitle = document.querySelector('.color-title');
const colorChangeButton = document.querySelector('.color-change');
const wrapper = document.querySelector('.wrapper');

// Объект
let colorObj = {
  currentColor: '008d3b',
  changeColor: function () {  
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    wrapper.style.backgroundColor = '#' + randomColor;
    colorChangeButton.style.color = '#' + randomColor;
    colorTitle.innerHTML = '#' + randomColor;
  },
};

// Привязка контекста вызова функции к объекту
function bind(func, context) {  
  return function () { 
    return func.bind(context, arguments);
  };
}

colorTitle.innerHTML = '#' + colorObj.currentColor;
colorChangeButton.style.color = '#' + colorObj.currentColor;
const generateColorFunction = bind(colorObj.changeColor, colorObj);
colorChangeButton.addEventListener('click', generateColorFunction());