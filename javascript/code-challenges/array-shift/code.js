'use strict';
let arr1=[2,4,6,-8];
let arr2=[42,8,15,23,42];

function insertShiftArray(arr,b){
  let newArr=[];
  let x=Math.ceil(arr.length/2);

  for (let i=0; i<x; i++){
    newArr.push(arr[i]);
  }
  newArr.push(b);
  for (let j=x; j<arr.length; j++){
    newArr.push(arr[j]);
  }
  return newArr;
}
insertShiftArray(arr1,5);
insertShiftArray(arr2,16);
