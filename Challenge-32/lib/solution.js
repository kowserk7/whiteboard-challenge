'use strict';

const solution = module.exports = {};

solution.fibIterative = function(n) {
  if(typeof n !== 'number' || !n) return null;
  if(n%1 !== 0) return 'must be whole number';
  
  let a = 1;
  let b = 0;
  while (n-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
};

solution.fibRecursive = function (n)  {
  if(typeof n !== 'number') return null;
  if(n%1 !== 0) return 'must be whole number';

  if(n<=1) return n;
  else
    return solution.fibRecursive(n-1) + solution.fibRecursive (n-2);  
};