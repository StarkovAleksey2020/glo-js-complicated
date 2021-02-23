
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  const textInputElement = document.querySelector('.text-input');
  const textOutputElement = document.querySelector('.text-output');
 
  $(".text-input").keyup($.debounce(300, function(e) {
    textOutputElement.textContent = textInputElement.value;
  }));

});