const { expect } = require('@jest/globals');
const insertionSort = require('../insertionSort.js');

describe('insertionSort', () => {

  it('should return sorted array ', () => {
    //arr
    let arr =[8,4,23,42,16,15];
    //action
    const result= insertionSort(arr);
    //assert
    expect(result).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

});
