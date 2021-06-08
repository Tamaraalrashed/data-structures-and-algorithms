'use strict';
// const {Queue}= require('../../stacksAndQueues/stacks-and-queues.js');

class Node{
  constructor(value=null){
    this.value=value;
    this.children=[];
  }
}

class K_aryTree{

  constructor(value){
    this.root= new Node(value);
  }
}

//   treeOrder(){
//     let arr=[];
//     let newQueue=new Queue();
//     newQueue.enqueue(this.root);
//     arr.push(newQueue.value);
//     while(!newQueue.isEmpty()){
//       let node =newQueue.dequeue();
//       arr.push(node.value);
//       for (const child in node.children) {
//         newQueue.enqueue(child);

//       }
//     }

//     return arr;
//   }



// }


const fizzBuzzTree = (k_arytree) => {

  if(!k_arytree.root) return null;
  let counter=0;
  let newTree=new K_aryTree() ;
  const treeFizz = (node) => {
    // console.log('node', node);
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      newTree.root.children [counter]= 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      newTree.root.children [counter]= 'Fizz';
    } else if (node.value % 5 === 0) {
      newTree.root.children [counter]= 'Buzz';
    } else {
      newTree.root.children [counter] = node.value + '';
    }
    counter++;
    // if (counter<node.root.children.length) treeFizz(node.root.children[counter]);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        treeFizz(node.children[i]);
      }
    }
  };

  treeFizz(k_arytree.root);
  return newTree;

};




module.exports={fizzBuzzTree:fizzBuzzTree,
  K_aryTree:K_aryTree, Node:Node
};
