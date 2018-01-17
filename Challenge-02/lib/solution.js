'use strict';

const solution = module.exports = {};

solution.challenge = function (array) {
  var arr = [];
  for (var i = 0; i < array.length; i ++) {
    arr.push(Math.round(array[i]));
  }
  if (arr.length == 0) {
    return 'empty array';
  }
  if (arr.every(x => typeof x === 'number') ) {
    arr.sort(function (a, b) { return b - a; });
    return {
      first: arr[0],
      second: arr[1] === arr[0] ? arr[2]: arr[1],
    };
  } else {
    return 'only integers';
  }
};