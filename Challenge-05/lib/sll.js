'use strict';
const Nd = require('./nd.js');

class SLL {
  constructor() {
    this.head = null;
  }
  insertHead(val) {
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }
  insertEnd(val) {
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }
  findMiddle() {
    let counter = 0;
    for(var itr = this.head; itr.next; itr = itr.next) {
      if (itr.value === null) {
        console.log(itr.value);
        return null;
      }
       
      counter++;
    }
    let middle = Math.ceil(counter/2);
    let newCounter = 0;
    for(var itrNew = this.head; newCounter < middle; itrNew = itrNew.next) {
      newCounter++;
    }
    return itrNew.value;
  }
}
module.exports = SLL;