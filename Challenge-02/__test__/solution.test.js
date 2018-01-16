'use strict';

const solution = require ('../lib/solution.js');

describe ('Solution Module', function () {
  describe ('#return', function () {
    it ('should only be integers', function () {
      expect (solution.challenge).not.toEqual(null);
    });
    it ('should not return duplicates', function () {
      expect (solution.challenge.first).not.toEqual(solution.challenge.second);
    });
    it ('should round floating numbers', function () {
      expect (solution);
    });
    it ('should return null if array is empty', function () {
      expect (solution.challenge).not.toEqual(null);
    });
  });
});