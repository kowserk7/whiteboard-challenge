'use strict';

const solution = module.exports = {};

solution.intersect = (arrOne, arrTwo) => {
  if (!arrOne || !arrTwo) {
    return null;
  }
  let newArr = [];
  arrOne.map(val => {
    for (let i = 0; i < arrTwo.length; i++) {
      if (val === arrTwo[i]) {
        newArr.push(arrTwo[i]);
      }
    }
  });
  return newArr;
};