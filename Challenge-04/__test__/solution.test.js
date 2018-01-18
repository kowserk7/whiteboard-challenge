'use stict';

const solution = require('../lib/solution');

describe ('Solution Module', () => {
  describe ('#intersect', () => {
    it('should return an array with the matching value', () => {
      expect (solution.intersect(['a','b','c'],['c','d','e'])).toEqual(['c']);
    });
    it ('should contain a value in the paramaters', () => {
      expect (solution.intersect()).toBeNull();
    });
  });
});