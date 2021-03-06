'use strict';

const Stack = require('./stack');
const solution = module.exports = {};

solution.checkBraces = function (string) {
  if (typeof string !== 'string') return null;
  let test = new Stack;
  let array = string.split('');
  if (typeof string !== 'string') return null;
  for (let i =0 ; i < string.length; i++) {
    if (array [i] === '{') {
      test.push(array[i]);
    }
    if (array[i] === '}' ) {
      if (test.size === 0){
        return 'Braces do not match';
      }
      test.pop(array[i]);
    }
  }
  if (test.top === null) {
    return 'Braces match';
  }
  console.log(test);
  console.log(test.top);
};


