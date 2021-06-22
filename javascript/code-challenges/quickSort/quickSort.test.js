'use strict';

const { expect } = require('@jest/globals');
const {quickSort} = require('./quickSort.js');

describe('Quick Sort Algorithm Test', () => {

  it('should return sorted array ', () => {
    //arr
    let arr =[8,4,23,42,16,15];
    //action
    const result= quickSort(arr,0, arr.length-1);
    //assert
    expect(result).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });
  it('should return sorted array ', () => {
    //arr
    let arr =[5,12,7,5,5,7];
    //action
    const result= quickSort(arr,0, arr.length-1);
    console.log('result', result);
    //assert
    expect(result).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
});
