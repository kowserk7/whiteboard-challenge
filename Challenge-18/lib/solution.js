'use strict';

const Tree = require('./kary-tree');
const solution = module.exports = {};

solution.mostKids = (tree) => { // Big O notation: O(n)
  if(!tree) return null;
  if(typeof tree !== 'object') return null;
  let mostChildren = tree.root;
  tree.breadthFirst(current => {
    if(current.children.length > mostChildren.children.length) {
      mostChildren = current;
    }
  });
  return mostChildren;
};