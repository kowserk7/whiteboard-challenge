const Node = require('./node');
const Stack = require('./stack');

module.exports =  class Queue {

  constructor(maxSize= 1048) {
    this.maxSize = maxSize;
    this.size = 0;
    this.stackIn = new Stack(maxSize);
    this.stackOut = new Stack(maxSize);
  } 

  enqueue(value) {
    if (this.size === this.maxSize) throw new Error ('Queue overflow!');
    if (!value && value !==0) throw new Error('Value must be valid');

    this.stackIn.push(value);
    this.size ++;
  }

  dequeue() {
    if (!this.size) throw new Error('Queue is empty!!');
    if (!this.stackOut.size)
      while(this.stackIn.size) this.stackOut.push(this.stackIn.pop());
  }
};