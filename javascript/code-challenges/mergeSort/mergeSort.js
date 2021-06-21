'use strict';

const mergeSort=(arr)=>{
  let n = arr.length;
  if (n===1){
    return arr;
  }
  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    mergeSort(left);
    mergeSort(right);
    mergeAll(left, right, arr);
  }
  return arr;
};

const mergeAll=(left,right,arr)=>{
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i=i+1;
    }
    else {
      arr[k] = right[j];
      j=j+1;
    }
    k=k+1;
  }

  while(i < left.length){
    arr[k] = left[i];
    i=i+1;
    k=k+1;
  }

  while(j < right.length){
    arr[k] = right[j];
    j=j+1;
    k=k+1;
  }
};
module.exports=mergeSort;

