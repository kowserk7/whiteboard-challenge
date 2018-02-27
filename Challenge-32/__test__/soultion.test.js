'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('iteratively', () => {
    it('should return a value for the correct input', () => {
      expect(solution.fibIterative(4)).toEqual(3);
    });
    it('should return a null value for the incorrect input', () => {
      expect(solution.fibIterative()).toEqual(null);
    });
    it('should return a null value for the incorrect input', () => {
      expect(solution.fibIterative('4')).toEqual(null);
    });
    it('should accpet floating point numbers as avalid input', () => {
      expect(solution.fibIterative(4.7)).toEqual('must be whole number');
    });
  });
  describe('recusively', () => {
    it('should return a value for the correct input', () => {
      expect(solution.fibRecursive(4)).toEqual(3);
    });
    it('should return a null value for the incorrect input', () => {
      expect(solution.fibRecursive()).toEqual(null);
    });
    it('should return a null value for the incorrect input', () => {
      expect(solution.fibRecursive('4')).toEqual(null);
    });
    it('should accpet floating point numbers as avalid input', () => {
      expect(solution.fibRecursive(4.7)).toEqual('must be whole number');
    });
  });
});