'use strict';

const Tree = require('../lib/kary-tree.js');
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', () => {
    let tree = new Tree();
    tree.insert(1).insert(4, 1).insert(7, 1).insert(2, 1).insert(18, 1).insert(78, 1).insert(2, 1).insert(45, 1);
    describe('Valid arguments', () => {
      it('should return a node', () => {
        console.log(solution.linkedList(tree).val);
        expect(solution.linkedList(tree)).toBeInstanceOf(Object);
      });
    });
    describe('Invalid arguments', () => {
      it('should return null if argument is not an object', () => {
        expect(solution.linkedList(1)).toBeNull();
        expect(solution.linkedList('a')).toBeNull();
      });
      it('should return null if no argument is passed', () => {
        expect(solution.linkedList()).toBeNull();
      });
    });
  });
});