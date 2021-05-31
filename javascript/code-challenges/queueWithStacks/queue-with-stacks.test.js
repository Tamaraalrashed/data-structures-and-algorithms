'use strict';
const {expect} = require('@jest/globals');
const PseudoQueue= require('./queue-with-stacks.js');

describe('PseudoQueue Test', () => {
  it('should enqueue an item into Queue',()=>{
    let queue=new PseudoQueue();
    queue.enqueue(10);
    expect(queue.stack1.top.value).toEqual(10);
  });

  it('should enqueue multiple items into Queue',()=>{
    let queue=new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(7);
    queue.enqueue(12);
    expect(queue.stack1.peek()).toEqual(12);
  });

  it('should dequeue an item from Queue',()=>{

    let queue=new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(14);
    queue.enqueue(12);
    let x=queue.dequeue();
    expect(x).toEqual(10);
    expect(queue.stack2.size).toEqual(2);

  });

  it('Can successfully empty a Queue after multiple dequeue',()=>{

    let queue=new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(14);
    queue.dequeue();
    queue.dequeue();
    expect(queue.stack2.size).toEqual(0);
  });
  it('Should raises an exception for dequeue an empty Queue',()=>{

    let queue=new PseudoQueue();
    let x=function(){
      queue.dequeue();
    };
    expect(x).toThrow();
  });

});
