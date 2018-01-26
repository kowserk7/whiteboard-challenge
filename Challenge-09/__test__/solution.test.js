'use strict';

const solution = require('../lib/solution');
const SLL = require('../lib/sll');

describe('Solution Module', () => {
  let sll = new SLL();

  sll.insertHead(25);
  sll.insertEnd(12);
  sll.insertEnd(33);
  sll.insertEnd(4);
  sll.insertEnd(87);

  let sll2 = sll.head.next;

  describe('solution', () => {
    it('should accept two argument and return the correct node', () => {
      expect(solution.find(3, sll)).toBe(sll2);
    });
    it('should return null if SLL is not an object', () => {
      expect(solution.find(4,'SLL')).toBeNull();
    });
    it('should return null if offset is not a number', () => {
      expect(solution.find('4',sll)).toBeNull();
    });
  });
});