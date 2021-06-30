'use strict ';
const {expect} = require('@jest/globals');
const HashTable=require('../hashTable/hashTable');
const leftJoin=require('./hashmapLeft');


describe('leftJoin Tests', () => {
  it('1- Can return the data', () => {
    let left = new HashTable(10);
    let right = new HashTable(10);

    left.add('fond','enamored');
    left.add('wrath','anger');
    left.add('diligent','employed');
    left.add('outfit', 'garb');
    left.add('guide', 'usher');
    console.log('test', left);

    right.add('fond','averse');
    right.add('wrath','delight');
    right.add('diligent','idle');
    right.add('guide', 'follow');
    right.add('flow', 'jam');
    let x=leftJoin(left, right);
    console.log('from test', x);
    //       let values={"size": 10, "table": [{"head": {"next": null, "value": {"0": [23, 8]}}}, {"head": {"next": null, "value": {"5": [24, 7]}}}, {"head": {"next": null, "value": {"4": [25, null]}}}, {"head": {"next": null, "value": {"3": [26, 3]}}}, undefined, undefined]}
    expect(leftJoin(left,right)).toEqual('');
  });
});
