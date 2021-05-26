'use strict';
const {expect} = require('@jest/globals');
const LinkedList=require('../linked-list/linked-list.js');
const zipLists=require('./ll_zip.js');


describe( 'linked-lists-zip' ,()=>{

  // if it's create new linked list
  it( 'Can return zipList with same length of two lists',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll2.insert( 4 );
    ll2.insert( 5 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert
    expect(x.toString()).toEqual( '{ 1 } -> { 5 } -> { 10 } -> { 4 } -> NULL' );

  } );
  it( 'Can return zipList with different length of two lists ll1<ll2',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll2.insert( 4 );
    ll2.insert( 5 );
    ll2.insert( 7 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert

    expect(x.toString()).toEqual( '{ 1 } -> { 7 } -> { 10 } -> { 5 } -> { 4 } -> NULL' );

  } );
  it( 'Can return zipList with different length of two lists ll1>ll2',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();
    ll1.insert( 10 );
    ll1.insert( 1 );
    ll1.insert( 4 );
    ll2.insert( 5 );
    ll2.insert( 7 );
    //act
    let x = zipLists ( ll1,ll2 );
    //assert

    expect(x.toString()).toEqual( '{ 4 } -> { 7 } -> { 1 } -> { 5 } -> { 10 } -> NULL' );

  } );
  it( 'should throw an error with empty linked list',()=>{
    //arrange
    let ll1 = new LinkedList ();
    let ll2 = new LinkedList ();

    //act
    function x(){
      zipLists ( ll1,ll2 );
    }

    //assert

    expect(x).toThrow('there is no linked list entered here');

  } );
});
