'use strict';
const Node= require('../linked-list/node.js');


class Stack{
  constructor(){
    this.top=null;
    this.size=0;
  }

  push(value){
    let node =new Node(value);
    let current=this.top;
    this.top=node;
    this.top.next= current;
    this.size=this.size+1;
    // console.log('top',this);
    return this;

  }

  pop(){
    if (this.size===0) throw new Error('this is an empty stack!');
    else{

      let current = this.top;
      this.top = this.top.next;
      this.size=this.size-1;
      current.next = null;
      return current.value;

    }
  }
  peek(){
    if (this.size===0) throw new Error('this is an empty stack!');
    else{
      return this.top.value;
    }
  }
  isEmpty(){
    if (this.size===0) return true;
    else{ return false;}
  }
}

class Queue{
  constructor(){
    this.front=null;
    this.tail=null;
    this.size=0;
  }

  enqueue (value){
    let node =new Node(value);
    if (this.size===0){
      this.front=node;
      this.tail=node;
      this.size=this.size+1;
      return this;
    }
    else{
      this.tail.next=node;
      this.tail=node;

      this.size=this.size+1;
      //   console.log('enq',this);
      return this;
    }

  }
  dequeue (){
    if (this.size===0) throw new Error('this is an empty queue!');

    if (this.size===1) {
      this.tail = null;
    }

    this.front=this.front.next;
    this.size=this.size-1;
    console.log('deq',this);
    return this;

  }
  peek(){
    if (this.size===0) throw new Error('this is an empty queue!');
    else{
      return this.front.value;
    }
  }

  isEmpty(){
    if (this.size===0) return true;
    else{ return false;}
  }
}




module.exports={
  Stack:Stack,
  Queue:Queue
};

