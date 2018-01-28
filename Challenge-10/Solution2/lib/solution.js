'use strict';

const solution = module.exports = {}; 

solution.binarySearch = function (n, arr) {
  if (typeof n !== 'number' || typeof arr !== 'object') return null;
  let max = arr.length - 1;
  let min = 0;
  let mid;
  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    if (arr[mid] === n) return {value: n, index: mid};
    if (arr[mid] < n) min = mid + 1;
    if (arr[mid] > n) max = mid - 1;
  }
  return null;
};