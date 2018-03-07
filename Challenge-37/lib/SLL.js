'use strict';

const Nd = require('./node');

class SLL {
  constructor() {
    this.head = null;
  }

  insertHead(val) {
    if(val === undefined) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) {
    if(val === undefined) return null;
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for(var node = this.head; node.next; node = node.next);
    node.next = nd;
    return this;
  }

  reverse() {
    if(!this.head) return this;
    let curr_node;
    let next_node = this.head;
    let prev = null;
    while(next_node){
      curr_node = next_node;
      next_node = next_node.next;
      curr_node.next = prev;
      prev = curr_node;
    }
    this.head = curr_node;
    return this;
  }

  remove(offset) {
    if ( !offset || typeof offset !== 'number' ) return null;
    let cur_node = this.head;
    let prev_node = cur_node;
    let i = 1;

    if (offset === 1) {
      this.head = prev_node.next;
      return this;
    }

    while(cur_node){
      if( offset === i ){
        prev_node.next = cur_node.next;
        this.head = prev_node;
        return this;
      } 
      prev_node = cur_node; 
      cur_node = cur_node.next;
      i++;
    }
    return null;
  }


  findNthNodeFromEnd(n) {
    if( typeof n !== 'number' ) return null;
    let i = 0;
    let curr_node = this.head;
    for(let next_node = this.head; next_node.next; next_node = next_node.next){
      if((i > n)) curr_node = curr_node.next;
      i++;
    }
    curr_node = curr_node.next;
    if(i < n) curr_node = null;
    this.head = curr_node;
    return this;
  }
}

module.exports = SLL;