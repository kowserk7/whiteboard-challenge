'use strict';

const solution = require('../lib/solution.js');

describe ('Train Module', function () {
  describe ('#transverse', function () {
    it ('Should accept the object till null', function () {
      solution.transverse({'value': 2, next:{'value': 7, next:{'value': 16, next:{'value':7, next:null}}}}).toBe(32);
    });
    it ('Should give an error')
  });
});