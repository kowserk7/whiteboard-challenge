'use strict';

const Queue = require('../lib/queue');

describe('Queue Module', () => {
  beforeEach(() => this.queue = new Queue());
  describe('#Properties', () => {
    it('should validate an object', () => {
      expect(this.queue).toBeInstanceOf(Object);
    });
    it('should have a maximum size of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
    it('should have a value of 0 for the size', () => {
      expect(this.queue.size).toEqual(0);
    });
  });
  describe('#Enqueue', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toBe(20);
    });
    it('should add a new node with the val of 1 to the bottom of the queue', () => {
      this.queue.enqueue(100);
      expect(this.queue.value).toBe();
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  // describe('#Dequeue', () => {
  //   beforeEach(() => this.queue = new Queue());
  // });
});