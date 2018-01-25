'use strict';

const ND = require('../lib/nd');

class SLL {
  constructor () {
    this.head = null;
  }
  insertHead(val) {
    let nd = new ND(val);
    if(!this.head){
      this.head = ND;
      return this;
    }
  }
  insertEnd(val) {
    let nd = new ND(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
  }
}
module.exports = {};