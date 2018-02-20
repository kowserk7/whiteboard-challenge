'use strict';

const solution = module.exports = {};

solution.rotate = (array) => {
  if(array.length !== array[0].length || array.length !== array[1].length || array.length !== array[2].length) return null;
  array = array.reverse();
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp;
    }
  }
  return array;
};