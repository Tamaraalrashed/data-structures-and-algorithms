'use strict';
const {expect} = require('@jest/globals');
// const LinkedList=require('../linked-list/linked-list.js');
const { Stack, Queue } = require('./stacks-and-queues.js');


describe( 'Stack Tests' ,()=>{

  // if it's create new linked list
  it( 'Can successfully push onto a stack',()=>{
    //arrange
    let stack = new Stack();
    //act
    stack.push(100);

    //assert
    expect(stack.top.value).toEqual( 100 );

  } );

  it( 'Can successfully push multiple values onto a stack',()=>{
    //arrange
    let stack = new Stack();
    //act
    stack.push(100);
    stack.push(200);
    //assert
    expect(stack.top.value).toEqual( 200 );

  } );
  it( 'Can successfully pop off the stack',()=>{
    //arrange
    let stack = new Stack();
    //act
    stack.push(100);
    stack.push(200);
    stack.pop();

    //assert
    expect(stack.top.value).toEqual( 100 );
    // expect(stack.top.next).toEqual( 200 );
  } );

  it( 'Can successfully empty a stack after multiple pops',()=>{
    //arrange
    let stack = new Stack();
    //act
    stack.push(100);
    stack.push(200);
    stack.pop();
    stack.pop();

    //assert
    expect(stack.size).toEqual(0);

  } );


  it( 'Can successfully peek the next item on the stack',()=>{
    //arrange
    let stack = new Stack();
    //act
    //act
    stack.push(100);
    stack.push(200);
    let x=stack.peek();
    //assert

    expect(x.value).toEqual( 200 );

  } );

  it( 'Can successfully instantiate an empty stack',()=>{
    //arrange
    let stack = new Stack();
    //act
    let x=stack.isEmpty();
    //assert

    expect(x).toEqual( true );

  } );

  it( 'Calling pop or peek on empty stack raises exception',()=>{
    //arrange
    let stack = new Stack();
    //act

    function x(){
      stack.peek ();
    }
    function y(){
      stack.pop ();
    }

    //assert

    expect(x).toThrow('this is an empty stack!');
    expect(y).toThrow('this is an empty stack!');

  } );
});

describe( 'Queue Tests' ,()=>{

  it( 'Can successfully enqueue into a queue',()=>{
    //arrange
    let queue = new Queue();
    //act
    queue.enqueue(100);
    //assert
    expect(queue.front.value).toEqual( 100 );

  } );

  it( 'Can return zipList with same length of two lists',()=>{
    //arrange
    let queue = new Queue();
    //act
    queue.enqueue(100);
    queue.enqueue(200);
    //assert
    expect(queue.tail.value).toEqual( 200 );

  } );
  it( 'Can successfully enqueue multiple values into a queue',()=>{
    //arrange
    let queue = new Queue();
    //act
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);
    //assert
    expect(queue.front.value).toEqual( 100 );
  } );

  it( 'Can successfully dequeue out of a queue the expected value',()=>{
    //arrange
    let queue = new Queue();
    //act
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);
    queue.dequeue();

    //assert
    expect(queue.front.value).toEqual( 200 );


  } );


  it( 'Can successfully peek into a queue, seeing the expected value',()=>{
    //arrange
    let queue = new Queue();
    //act
    queue.enqueue(100);
    queue.enqueue(200);
    let x=queue.peek();
    //assert

    expect(x.value).toEqual( 100 );

  } );

  it( 'Can successfully instantiate an empty queue',()=>{
    //arrange
    let queue = new Queue();
    //act
    let x=queue.isEmpty();
    //assert

    expect(x).toEqual( true );

  } );

  it( 'Calling dequeue or peek on empty queue raises exception',()=>{
    //arrange
    let queue = new Queue();
    //act

    function x(){
      queue.peek ();
    }
    function y(){
      queue.dequeue ();
    }

    //assert

    expect(x).toThrow('this is an empty queue!');
    expect(y).toThrow('this is an empty queue!');

  } );

  it( 'Can successfully empty a queue after multiple dequeues',()=>{
    //arrange
    let queue = new Queue();
    //act
    queue.enqueue(100);
    queue.enqueue(200);
    queue.dequeue();
    queue.dequeue();

    //assert
    expect(queue.size).toEqual(0);

  } );

});
