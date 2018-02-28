'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('exponentSum', () => {
    it('should ', () => {
      expect(solution.exponentSum(4,5)).toEqual(7);
    });
    it('should only accept Numbers as an arguemt', () => {
      expect(solution.exponentSum('4', '5')).toEqual('Invalid input');
    });
    it('should only accept whole numbers as an arguement', () => {
      expect(solution.exponentSum(4.878, 8.90)).toEqual('Must be whole number');
    });
    it('should error out if there is not argument', () =>  {
      expect(solution.exponentSum()).toEqual('Invalid input');
    });

  });
});