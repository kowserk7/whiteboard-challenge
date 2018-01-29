'use strict';

const solution = module.exports = {};

solution.calcualteMissing = function (arr) {
  if(!arr) return null;
  if (arr.length < 99) return 'Error. More than 100 numbers.';
  if (arr.length > 99) return 'Error. More than 1 number missing.';
  let sum = arr.reduce((a, b) => a + b, 0);
  let result = 5050 - sum;
  return result;
};