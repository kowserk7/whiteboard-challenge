'use strict';

const Tree = require('../lib/kary-tree.js');
const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', () => {
    let tree = new Tree();
    tree.insert(1).insert(2, 1).insert(3, 1).insert(4, 2).insert(5, 2).insert(6, 2).insert(7, 2).insert(8, 3);

    let tree2 = new Tree();
    tree2.insert(1).insert(2, 1).insert(3, 1).insert(4, 2).insert(5, 2);

    describe('Valid arguments', () => {
      it('should return a node', () => {
        expect(solution.mostKids(tree)).toBeInstanceOf(Object);
      });
      it('should return the node with most children', () => {
        expect(solution.mostKids(tree).children.length).toEqual(4);
      });
      it('should return the first instance of a node with an equal amount of most children', () => {
        expect(solution.mostKids(tree2).val).toEqual(1);
      });
    });
    describe('Invalid arguments', () => {
      it('should return null if argument is not an object', () => {
        expect(solution.mostKids(1)).toBeNull();
        expect(solution.mostKids('a')).toBeNull();
      });
      it('should return null if no argument is passed', () => {
        expect(solution.mostKids()).toBeNull();
      });
    });
  });
});