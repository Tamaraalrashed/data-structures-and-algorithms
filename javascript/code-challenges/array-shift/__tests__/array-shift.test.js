'use strict';
const shiftArray=require('../array-shift.js');

describe('shift array test ', () => {
  it ('should return an array with the new value added at the middle index',() => {
    expect(shiftArray([2,4,6,-8],5)).toEqual([2,4,5,6,-8]);
    expect(shiftArray([42,8,15,23,42],6)).toEqual([42,8,15,6,23,42]);
  });
});
