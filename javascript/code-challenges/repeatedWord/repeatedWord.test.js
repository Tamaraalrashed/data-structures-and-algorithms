'use strict';
const {expect} = require('@jest/globals');
const repeatedWord=require('./repeatedWord');

describe('Repeated word validation tests', () => {
  it('Should return it from the given string ', () => {
  
    const str='It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';
    let repeated= repeatedWord(str);
    console.log('sssss',repeated);
    expect(repeated).toEqual('it');

  });
  it('Should return a from the given string ', () => {
    const str='Hello I am Tamara, an electrical engineer feeling sad to get through this stress in order to be a web developer';
    let repeated= repeatedWord(str);

    expect(repeated).toEqual('to');

  });

  it('Should throw an error for number ', () => {
    function x() {repeatedWord(1234);}
    expect(x).toThrow;
  });
});
