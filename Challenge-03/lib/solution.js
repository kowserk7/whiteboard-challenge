'use strict';

const solution = module.exports = {};

solution.traverse = function (train) {
  if (!train) return null;
  let total = 0;
  while (train.next !== null) {
    if (typeof train.value !== 'number') return 'object value not a number';
    console.log(train.value);
    total += train.value;
    train = train.next;
  }
  console.log(train.value);
  return total + train.value;
};
