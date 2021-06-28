'use strict';

const BinaryTree=require('../../tree/tree.js');

function treeIntersection(binary1,binary2){//[1,2,3,4]
  let arr=[];

  if(!binary1 && !binary2 ) {
    // console.log('inside');
    throw new Error('Exception');
  }

  const firstBinary=binary1.preOrder();
  const secondBinary= binary2.preOrder();

  // console.log('hello to see the order tree', firstBinary);
  // console.log('hello to see the order tree1', secondBinary);
  for (let i = 0; i < firstBinary.length; i++) {
    if(firstBinary[i]===secondBinary[i]){
      arr.push(firstBinary[i]);
    }

  }
  return arr;

}

module.exports=treeIntersection;
