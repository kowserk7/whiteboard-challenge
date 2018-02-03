'use strict';

const k_ary = require('./kary-tree');
const solution = module.exports =  {};

solution.arr = function(root) {
  let tree = new k_ary();
  tree = root;
  if(!tree.root) return new Error('Invalid input');
  let results = [];
  let callback = function(current) {
    if(!current.val.children[0]) results.push(current.val);
  };
  tree.breadthFirst(callback);
  return results;
};