'use strict';

var array = [-7, 17, 6, -7, 44.33, 12, 6, 145, 67];

function challenge(arr) {
  if (typeof arr !== 'number') {
    return null;
  } else {
    return {
      first: arr.sort(function (a, b) { return a - b; })[0],
      second: arr.sort(function (a, b) { return a - b; }) [1],
    };
  }
}
challenge(array); 
