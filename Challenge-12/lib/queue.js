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
    // BigO(1) to dequeue an item. the operation of moving items
    // from the in stack to the out stack is amortized away since
    // it will happen increasingly rarely the greater the number of
    // items present in the Queue
    if (!this.size)
      throw new Error('Queue is empty!!');

    // Only ever move items from in stack to out stack when out is
    // empty and a dequeue call is received
    if (!this.stackOut.size)
      while (this.stackIn.size) this.stackOut.push(this.stackIn.pop());

    this.size--;
    return this.stackOut.pop();

    // if (!this.size) throw new Error('Queue is empty!!');
    // if (!this.stackOut.size)
    //   while(this.stackIn.size) this.stackOut.push(this.stackIn.pop());
  }
};