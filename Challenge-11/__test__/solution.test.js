'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#Calculate', () => {

    let arr = Array(100).fill(0).map((e, i) => e = i + 1);
    let arr2 =  arr.splice(45,1);
    console.log(arr2);

    it('should check to have an array of exactly 99 numbers', () => {
      expect(arr.length).toBe(99);
    });

    it('should only have a data type of number', () => {
      expect(typeof solution.calcualteMissing(arr)).toBe('number');
    });

    it('should return the number 46', () => {
      expect(solution.calcualteMissing(arr)).toEqual(46);
    });
  });
});