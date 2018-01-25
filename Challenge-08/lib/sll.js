'use strict';

const ND = require('../lib/nd');

class SLL {
  constructor () {
    this.head = null;
    this.end = null;
  }
  insertHead(val) {
    let nd = new ND(val, this.head);
    this.head = nd;
    if(!this.end){
      this.end = nd;
      return this;
    }
  }
  insertEnd(val) {
    let nd = new ND(val);
    if(this.tail) {
      this.tail.next = nd;
    }
    if(!this.head) {
      this.head = nd;
      return this;
    }
  }
}
module.exports = SLL;