'use strict';

const solution = module.exports = {};

solution.challenge = function (array) {
  if (array.length == 0) {
    return null;
  }
  else if (array.every(x => typeof x === 'number') ) {
    array.sort(function (a, b) { return b - a; });
    return {
      first: array[0],
      second: array[1] === array[0] ? array[2]: array[1],
    };
  } else {
    return null;
  }
};



