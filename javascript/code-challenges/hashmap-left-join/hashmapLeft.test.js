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

    let y=x.table.map(item=>{
      return item.head.value;
    });
    console.log('from test', x);
    let values= [
      { wrath: [ 'anger', 'delight' ] },
      undefined,
      { diligent: [ 'employed', 'idle' ] },
      { outfit: [ 'garb' ] },
      { guide: [ 'usher', 'follow' ] },
      undefined,undefined,
      { fond: [ 'enamored', 'averse' ] },
      undefined,undefined
    ];
    expect(y).toEqual(values);
  });
});
