'use strict';

var array = [-7, 17, 45, 45];

function challenge(arr) {
  if (arr.length == 0) {
    return null;
  }
  else if (arr.every(x => typeof x === 'number') ) {
    arr.sort(function (a, b) { return b - a; });
    return {
      first: arr[0],
      second: arr[1] === arr[0] ? arr[2]: arr[1],
    };
  } else {
    return null;
  }
}

challenge(array);


