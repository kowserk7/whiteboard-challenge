'use strict';

const solution = require('../lib/solution.js');

describe ('Train Module', function () {
  describe ('#transverse', function () {
    let test = {'value': 2, next:{'value': 7, next:{'value': 16, next:{'value':7, next:null}}}};
    let test2 = {'value': 2, next:{'value': 'm', next:{'value': 16, next:{'value':7, next:null}}}};
    
    it ('Should accept the object till null', function () {
      expect(solution.traverse(test)).toEqual(32);
    });
    it ('', () => {
      expect(solution.traverse()).toBeNull();
    });
    it('Should not accpet any value other than a number', () => {
      expect(solution.traverse(test2)).toEqual('object value not a number');
    });
  });
});