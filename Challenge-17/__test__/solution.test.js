'use strict';

const solution = require('../lib/solution');
const k_ary = require('../lib/kary-tree');

describe('Solution Module', () => {
  
  beforeAll (() => {
    this.tree = new k_ary().insert(1,1).insert(8,1).insert(16,1).insert(33,1);
    this.emptyNode = new k_ary();
  });

  describe('Valid input/output with three childless nodes', () => {
    it('should return a type of number', () => {
      expect(typeof(solution.sumValue(this.tree))).toBe('number');
    });
    it('should return an a number with the sum of the values', () => {
      expect(solution.sumValue(this.tree)).toBe(58);
    });
    
  });
  describe('Invalid input/output', () => {
    it('should return error if nothing in tree', () => {
      expect(solution.sumValue(this.emptyNode)).toBeInstanceOf(Error);
    });
    it('should return error message if nothing in tree', () => {
      expect(solution.sumValue(this.emptyNode).message).toEqual('Invalid input');
    });
  });
});
