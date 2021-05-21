'use strict';
const arrayBinary= require('../array-binary-search.js');

describe('Testing array binary search', () => {
  it('should return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array', () => {
    expect(arrayBinary([4, 8, 15, 16, 23, 42],15)).toEqual(2);
    expect(arrayBinary([-131, -82, 0, 27, 42, 68, 179],42)).toEqual(4);
    expect(arrayBinary([11, 22, 33, 44, 55, 66, 77],90)).toEqual(-1);
    expect(arrayBinary([1, 2, 3, 5, 6, 7],4)).toEqual(-1);
  });
});
