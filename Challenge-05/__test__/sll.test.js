'use strict';

const SLL = require('../lib/sll.js');

describe ('Solution Module', () => {
  describe ('SLL', () => {
    it ('should return null id any node has no value', () => {
      var list1 = new SLL();

      list1.insertEnd(25);
      list1.insertEnd();
      list1.insertEnd(33);
      list1.insertEnd(4);
      list1.insertEnd(87);

      expect(list1.findMiddle()).toBeNull();
    });

    it ('should check for the middle value', () => {
      var list2 = new SLL();

      list2.insertEnd(25);
      list2.insertEnd(156);
      list2.insertEnd(33);
      list2.insertEnd(4);
      list2.insertEnd(87);

      expect(list2.findMiddle()).toBe(33);
    });

    it ('should take the higher node if there are an even number of nodes', () => {
      var list3 = new SLL();
      
      list3.insertEnd(25);
      list3.insertEnd(156);
      list3.insertEnd(33);
      list3.insertEnd(4);

      expect(list3.findMiddle()).toBe(33);
    });
  });
});
