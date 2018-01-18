'use strict';

const solution = module.exports = {};

solution.traverse = function (train) {
  let total = 0;
  while (train.next !== null) {
    console.log(train.value);
    total += train.value;
    train = train.next;
  }
  console.log(train.value);
  return total + train.value;
};
