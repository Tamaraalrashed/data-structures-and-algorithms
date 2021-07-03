'use strict';
const {expect} = require('@jest/globals');

const HashTable = require('./hashTable');

//arrange
const newTable = new HashTable(10);

describe('Hash Table Test ', () => {
  it('1- Can successfully add key/value to the table ',()=>{

    newTable.add( 'Tamara', 'Alrashed' );

    expect( newTable.get( 'Tamara' ) ).toEqual( 'Alrashed' );
  });

  it( '2- Can successfully returns false for a key that does not exist in the hash table', () => {

    expect( newTable.contains( 'Aya' ) ).toBeFalsy();
  } );


  it( '3- Can successfully handle a collision within the hash table', () => {

    newTable.add( 'aya', 'Alrashed' );
    newTable.add( 'yaa', 'Alrashed' );

    expect( newTable.hash( 'aya' ) ).toEqual( newTable.hash( 'yaa' ) );

  } );

  it( '4- Successfully hash a key to an in-range value', () => {

    expect( newTable.hash( 'Tahani' ) ).toBeLessThanOrEqual(10);
  } );

  it( '5- Can successfully handle a collision within the hash table', () => {

    newTable.add( 'aya', 'Alrashed' );
    newTable.add( 'yaa', 'Alrashed' );

    expect( newTable.hash( 'aya' ) ).toEqual( newTable.hash( 'yaa' ) );

  } );

});
