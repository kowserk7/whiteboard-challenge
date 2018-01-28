'use strict';

const solution = require('../lib1/solution-one');

describe('Solution Module', () => {
  
  describe('binary Search', () => {
    let string = '{hahshaj}jdisfklsda{jfkdsjfa}{klsdfml;as}{nkdsfa}{nfkdsanf;}}}{{{}{}';
    let string2 = '{aa}{bb}{cc}{dd}{ee}{ff}';

    it('should return null if input is not in given array', () => {
      expect(solution.checkBraces(string)).toBeNull();
    });
    it('should return the the index of n in the array', () => {
      expect(solution.checkBraces(string2)).toBe();
    });
    it('should return null if given array is empty', () => {
      expect(solution.checkBraces()).toBeNull();
    });
  });
});