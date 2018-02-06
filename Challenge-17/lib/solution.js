'use strict';

const k_ary = require('./kary-tree');
const solution = module.exports =  {};

solution.sumValue = function(root) {
  let tree = new k_ary();
  tree = root;
  if(!tree.root) return new Error('Invalid input');
  let results = [];
  let callback = function(current) {
    if(!current.val) return new Error('Invalid input');
    results.push(current.val.val);
  };
  tree.breadthFirst(callback);
  let sum = results.reduce((a, b) => a + b, 0);
  console.log(results);
  return sum;
};