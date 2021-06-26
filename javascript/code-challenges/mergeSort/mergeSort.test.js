const { expect } = require('@jest/globals');
const mergeSort = require('./mergeSort.js');

describe('mergeSort Test',() => {
  it('Can successfully mergeSort',() => {
    let arr = [8,4,23,42,16,15];
    let mergeSortedArray = [4, 8, 15, 16, 23, 42];
    //act
    let result = mergeSort(arr);

    expect(result).toEqual(mergeSortedArray);
  });

  it('should return the array if the length of the array equal to 1',() => {
    let arr = [7];
    //act
    let result = mergeSort(arr);

    expect(result).toEqual(arr);

  });

});
