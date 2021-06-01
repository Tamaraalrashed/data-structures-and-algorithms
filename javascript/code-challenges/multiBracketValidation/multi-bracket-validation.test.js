'use strict';
const {expect} = require('@jest/globals');
const multiBracketValidation=require('./multi-bracket-validation.js');

describe('Multi brackets validation tests', () => {
  it('Should return false for 1 round bracket', () => {
    let x= multiBracketValidation('ddjfajf(');
    expect(x).toBeFalsy;

  });
  it('Should return false for a string does not have any type of brackets', () => {
    let x =  multiBracketValidation('ddjfajf');

    expect(x).toBeFalsy;

  });
  it('Should return true for a string  has  two type of brackets', () => {
    let x= multiBracketValidation('{(})');
    expect(x).toBeTruthy;

  });

  it('Should return true for a string three types of brackets', () => {
    let x= multiBracketValidation('{}{Code}[Fellows](())');
    expect(x).toBeTruthy;

  });
  it('Should return true for a string two types of brackets', () => {
    let x= multiBracketValidation('()[[Extra Characters]]');
    expect(x).toBeTruthy;
  });

  it('Should throw an error for empty string ', () => {
    function x() {multiBracketValidation('');}
    expect(x).toThrow;
  });

  it('Should throw an error for number ', () => {
    function x() {multiBracketValidation(1234);}
    expect(x).toThrow;
  });
});
