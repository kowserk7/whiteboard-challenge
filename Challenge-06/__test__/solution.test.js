'use strict';

const solution = require('../lib/solution.js');

const cb = () => console.log('count');

describe('Solution', () => {
  it('should only accept n as a number', () => {
    expect (solution.loop('koko', cb)).toEqual(null);
    expect (solution.loop(3, cb)).not.toEqual(null);
  });
  it ('should return null if n = 0', () => {
    expect (solution.loop(0, cb)).toEqual(undefined);
  });
  it ('should take in cb as a function', () => {
    expect(solution.loop(3, 'fd')).toEqual(null);
  });
});