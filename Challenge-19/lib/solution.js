'use strict';

// const Tree = require('./kary-tree');
const SLL = require('./sll');
const solution = module.exports = {};

solution.linkedList = (tree) => { // Big O notation: O(n)
  if(!tree) return null;
  if(typeof tree !== 'object') return null;
  let arr = [];
  let sll = new SLL();
  tree.breadthFirst(current => {
    if(current.val) {
      arr.push(current.val);
    }
  });
  arr.sort(function(a,b){return a - b;});
  for (let i in arr){
    sll.insertHead(arr[i]);
  }
  return sll;
};