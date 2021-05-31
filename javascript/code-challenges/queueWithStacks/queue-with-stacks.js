'use strict';

const {Stack}=require('../../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue{

  constructor (){
    this.stack1=new Stack();
    this.stack2=new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
    // console.log('push', this.stack1.push(value));

  }

  dequeue(){
    // if (this.stack1.size===0) throw new Error('it is an empty Queue');
    if (this.stack2.size===0){
      while(this.stack1.size > 0 ){
        // console.log('stack', this.stack2);
        this.stack2.push(this.stack1.pop()) ;
        // console.log('pop', this.stack2.pop());
      }

    }
    // console.log('pop', this.stack2.pop());
    return this.stack2.pop();
  }


}




module.exports=PseudoQueue;
