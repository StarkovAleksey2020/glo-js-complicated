'use strict';
function generateOddNumber(min, max) {  
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomValue = Math.floor(Math.random() * (max - min)) + min;
  if (randomValue % 2 === 0) {
    return ++randomValue;
  }
  return randomValue;
}

console.log('generateOddNumber(1, 100): ', generateOddNumber(1, 100));
console.log('generateOddNumber(0, -10): ', generateOddNumber(0, -10));
console.log('generateOddNumber(-7, -3): ', generateOddNumber(-7, -3));
console.log('generateOddNumber(-100, 100): ', generateOddNumber(-100, 100));
console.log('generateOddNumber(1, -1): ', generateOddNumber(1, -1));

