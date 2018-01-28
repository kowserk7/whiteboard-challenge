'use strict';

const solution = require('../lib2/solution-two');

describe('Solution Module', () => {
  
  describe('binary Search', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];
    let array = [];

    it('should return null if input is not in given array', () => {
      expect(solution.binarySearch(33, arr)).toBeNull();
    });
    it('should return the the index of n in the array', () => {
      expect(solution.binarySearch(12, arr).index).toBe(11);
    });
    it('should return null if given array is empty', () => {
      expect(solution.binarySearch(4, array)).toBeNull();
    });
  });
});