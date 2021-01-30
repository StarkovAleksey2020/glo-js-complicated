'use strict';

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