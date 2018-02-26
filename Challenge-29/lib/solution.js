'use strict';

const solution = module.exports = {};
solution.sortAnagrams = function(array) {
  if (!array || array.length === 0) return 'Invalid';
  const anagrams = {};
  array.map(ele => {
    if (typeof ele !== 'string') return;
    var sortedWord = ele.split('').sort().join('');
    anagrams[sortedWord] ? anagrams[sortedWord].push(ele) : anagrams[sortedWord] = [ele];
  });
  let sortedArray = [];
  for (let property in anagrams) {
    anagrams[property].map(ele => sortedArray.push(ele));
  }
  return sortedArray;
};
