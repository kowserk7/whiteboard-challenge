'use strict';

const solution = module.exports = {};

solution.exponentSum = (nOne, nTwo) => {
  if (!nOne || !nTwo) return 'Invalid input';
  if (typeof nOne !== 'number' || typeof nTwo !== 'number') return 'Invalid input';
  if(nOne%1 !== 0 || nTwo%1 !==0) return 'Must be whole number';
  return Math.pow(nOne, nTwo).toString().split('').map(Number).reduce((a, b) => a + b);
};