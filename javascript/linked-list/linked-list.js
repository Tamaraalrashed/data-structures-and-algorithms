'use strict';

const Node =require('./node.js');

class LinkedList{
  constructor(){
    this.head=null;
  }

  insert(value){
    let node =new Node(value);
    if(!this.head) {
      this.head=node;

    }
    else{
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let node =this.head;
    while(node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
  toString(){
    let node =this.head;
    let stingsArray=[];
    while(node){

      stingsArray.push(`{ ${node.value} } -> `);
      node=node.next;
    }
    stingsArray.push(`NULL`);
    return stingsArray.join('');
  }

}

module.exports=LinkedList;
