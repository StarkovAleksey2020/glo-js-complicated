'use strict';

document.getElementById("inputArg").value = "";
let resultString = document.getElementById("resultId");
let textInput, buf, result;

function keyup(e) { 
  textInput = e.target.value;
  buf = textInput.substring(textInput.length - 1);
  if (!isNaN(parseInt(buf))) {
    alert('Аргумент не является строкой');
  }
  result = textInput.trim().substring(0, 30);
  if (result.length >= 30) {
    result += "...";
  }
  resultString.innerHTML = result;
}

window.onkeyup = keyup;