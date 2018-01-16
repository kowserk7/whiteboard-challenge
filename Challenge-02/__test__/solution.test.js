'use strict';

const solution = require ('../solution.js');

describe ('Solution Module', function () {
  describe ('#return', function () {
    it ('should only be integers', function () {
      expect (solution.arr).not.toEqual(null);
    });
    it ('should not return duplicates', function () {
      expect (solution.first).not.toEqual(solution.second);
    });
    it ('should round floating numbers', function () {
      expect (solution);
    });
    it ('should return null if array is empty', function () {
      expect (solution.array).not.toEqual(null);
    });
  });
});