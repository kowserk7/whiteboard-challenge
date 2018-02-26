'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function() {
  let anagram1 = ['acre', 'act', 'race', 'cat', 'tac', 'care'];
  let anagram2 = ['acre', 'race', 'care', 'act', 'cat', 'tac'];

  describe('#sortAnagrams', function() {
    it('should return foo if no arguments passed', function() {
      expect(solution.sortAnagrams()).toEqual('Invalid');
    });
    it('should return foo if empty array', function() {
      expect(solution.sortAnagrams([])).toEqual('Invalid');
    });
    it('should remove any element that is not a string', function() {
      expect(solution.sortAnagrams(anagram1)).toEqual(anagram2);
    });
  });
});