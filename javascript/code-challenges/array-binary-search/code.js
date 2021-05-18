'use strict';
let arr1=[4, 8, 15, 16, 23, 42];
let arr2=[11, 22, 33, 44, 55, 66, 77];
let arr3=[];
function BinarySearch (sortedArray, value){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === value) {

      return middle;
    } else if (sortedArray[middle] < value) {

      start = middle + 1;
    } else {

      end = middle - 1;
    }
  }
  return -1;
}

BinarySearch(arr1,15);
BinarySearch(arr2,4);
BinarySearch(arr3,5);
