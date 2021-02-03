'use strict';
// 1
const arr = ['103245', '203', '30354', '28', '808', '222'];
console.log('Filtered arr: ', arr.filter(arrItem => arrItem.substring(0, 1) === '2'));

// 2
function isSimple(n) {
  if (n === 0 || n === 1) {
    return false;
  } else {
    for (let index = 2; index < n; index++) {
      if (n % index === 0) {
        return false;
      }
    }
    return true;
  }
}

for (let index = 1; index < 100; index++) {
  if (isSimple(index)) { console.log(`число: ${index}, делители: 1, ${index}`); }
}