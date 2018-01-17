'use strict';

const solution = require ('../lib/solution.js');

describe ('Solution Module', function () {
  describe ('#return', function () {
    it ('should only be integers', function () {
      expect (solution.challenge).not.toEqual(null);
    });
    it ('should not return duplicates', function () {
      expect (solution.challenge([2,4,4])).toEqual({first: 4, second: 2});
    });
    it ('should round floating numbers', function () {
      expect (solution.challenge([2,4.5,3.5])).toEqual({first: 5, second: 4});
    });
    it ('should return null if array is empty', function () {
      expect (solution.challenge).not.toEqual(null);
    });
  });
});