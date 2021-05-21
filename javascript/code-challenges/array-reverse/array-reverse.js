'use strict';

//use for loop to reverse an array

function reverseArray(arr){
  let reverseArray=[];
  for (let i = arr.length-1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}


module.exports=reverseArray;


