'use strict';

const solution = require('../lib/solution.js');

describe ('Solution Module', () => {
  let a = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
  a.next.next = a.next;
  let b = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
  let c = {};

  it ('should check if SLL is circular', () => {
    expect(solution.cirr(a)).toBe(true);
  });
  it ('should check if SLL is not circular', () => {
    expect(solution.cirr(b)).toBe(false);
  });
  it ('should check if object is empty', () => {
    expect(solution.cirr(c)).toBe(null);
  });
});
