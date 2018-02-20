'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let arr2 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];
  
  let arr3 =  [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ];
  let arr4 =  [
    ['g', 'd', 'a'],
    ['h', 'e', 'b'],
    ['i', 'f', 'c'],
  ];

  let arr5 = [
    [1, 2],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let arr6 = [
    [1, 2, 3],
    [4, 5, 6],
  ];


  describe('Rotate', () => {
    it('should rotate the array at a 90 degree angle', () => {
      expect(solution.rotate(arr)).toEqual(arr2);
    });
    it('should be a 2D array', () => {
      expect(solution.rotate(arr)).toBeInstanceOf(Array);
      expect(solution.rotate(arr)[0]).toBeInstanceOf(Array);
      expect(solution.rotate(arr)[1]).toBeInstanceOf(Array);
      expect(solution.rotate(arr)[2]).toBeInstanceOf(Array);
    });
    it('should not rotate even with strings', () => {
      expect(solution.rotate(arr3)).toEqual(arr4);
    });
    it('should only accept prefect squares', () => {
      expect(solution.rotate(arr5)).toBeNull();
      expect(solution.rotate(arr6)).toBeNull();
    });
  });
});