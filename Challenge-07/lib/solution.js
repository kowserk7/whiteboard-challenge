'use strict';

const solution = module.exports = {};

solution.cirr = function (SLL) {
  if (!SLL) return null;

  if (!Object.keys(SLL).length) return null;

  let SLL2 = Object.assign({}, SLL);
  let curr, seen;
  curr = SLL2;
  while (curr.next) {
    if (curr.next.seen === true) return true;
    curr.seen = true;
    curr = curr.next;
  }
  return false;
};
solution.cirr();