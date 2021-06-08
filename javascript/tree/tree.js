'use strict';
const {Queue}=require('../stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value,left=null,right=null){
    if (!value) throw new Error('please insert a node!');
    this.value=value;
    this.left=left;
    this.right=right;
  }

}

class BinaryTree{
  constructor(root=null){
    this.root=root;
  }


  //root left right
  preOrder(){
    let results=[];
    const traverse=(node)=>{
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

    };
    traverse(this.root);

    return results;
  }

  //left root right
  inOrder(){
    let results=[];
    const traverse=(node)=>{
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  //left right root
  postOrder(){
    let results=[];
    const traverse=(node)=>{
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  findMaximumValue(){

    if (this.root===null) throw new Error ('you do not  have a tree');
    let number=0;
    const traverse=(node)=>{

      if(number<node.value){
        number=node.value;
        // console.log('number', number);
      }
      if(node.left!== null){
        // console.log('node', node);
        traverse(node.left);

      }
      // console.log('number after left',number);
      if(node.right!== null) {
        // console.log('node', node);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return number;
  }


  breadthFirst(){

    if (this.root===null) throw new Error ('you do not  have a tree');
    let arr=[];
    let newQueue=new Queue();
    newQueue.enqueue(this.root);
    while(!newQueue.isEmpty()){
      let node=newQueue.dequeue();
      arr.push(node.value);
      if(node.left){
        newQueue.enqueue(node.left);
      }
      if(node.right){
        newQueue.enqueue(node.right);
      }
    }
    return arr;
  }



}


class BinarySearchTree {
  constructor(root=null){
    this.root=root;
  }
  add(value){
    let newNode = new Node(value);
    if (value===null || value ==='') throw new Error ('please enter a valid value');
    if(this.root === null){
      this.root = newNode;
    }
    const traverse=(node)=>{
      if(value < node.value && node.left===null) {
        node.left=newNode;
        traverse(node.left);

      }

      else if (value > node.value && node.right===null) {
        node.right=newNode;
        traverse(node.right);
      }

    };
    traverse(this.root);

  }

  contains(value){
    //   if this == null
    //   return null
    // else if this key == search value
    //   return this
    // else if this key < search value
    //   search right
    // else search left


    if (value===null || value ==='') throw new Error ('please enter a valid value');
    if (this.root===null) throw new Error ('you do not  have a tree');
    let current =this.root;
    if (value===current.value) return true;
    while(current){
      if (value<current.value) current=current.left;
      // console.log('current', current);
      else if (value>current.value) current=current.right;
      else return true;
    }
    return false;

  }


}



module.exports={
  Node: Node,
  BinaryTree:BinaryTree,
  BinarySearchTree:BinarySearchTree

};
