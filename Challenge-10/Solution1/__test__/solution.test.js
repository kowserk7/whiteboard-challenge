'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  
  describe('binary Search', () => {
    let string = '{hahshaj}jdisfklsda{jfkdsjfa}{klsdfml;as}{nkdsfa}{nfkdsanf;}}}{{{}{}';
    let string2 = '{aa}{bb}{cc}{dd}{ee}{ff}';
    let string3 = [];

    it('should return null if braces do not match ', () => {
      expect(solution.checkBraces(string)).toEqual('Braces do not match');
    });
    it('should return truth if the braces match', () => {
      expect(solution.checkBraces(string2)).toEqual('Braces match');
    });
    it('should return null if not a string', () => {
      expect(solution.checkBraces(string3)).toBeNull();
    });
  });
});