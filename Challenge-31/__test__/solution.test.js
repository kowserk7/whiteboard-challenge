'use stict';

const solution = require('../lib/solution');

describe ('Solution Module', () => {
  let arr1 = ['a','b','c'];
  let arr2 = ['c','d','e'];
  let notArr = 'a, b, c';
  let notArr2 ='c, d, e';
  let arr3 = ['a','b', 1, 2];
  let arr4 = ['b', 'c', 2, 3];
  describe ('#intersect', () => {
    it('should return an array with the matching value', () => {
      expect (solution.intersect(arr1,arr2)).toEqual(['c']);
    });
    it ('should contain a value in the paramaters', () => {
      expect (solution.intersect()).toBeNull();
    });
    it ('should only accept arrays', () => {
      expect(solution.intersect(notArr, notArr2)).toEqual('Not an array');
    });
    it  ('should accept numbers and strings', () => {
      expect(solution.intersect(arr3, arr4)).toEqual(['b', 2]);
    });
  });
});