'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list.js');
const Node = require('../node.js');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('should add new item to empty linked list', () => {
    //arrange
    let linkedList = new LinkedList();
    let value = 7;
    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
  //arrange
    let linkedList = new LinkedList();
    linkedList.insert(7);
    let newValue = 10;
    //act
    linkedList.insert(newValue);
    //assert
    expect(linkedList.head.value).toEqual(newValue);
    expect(linkedList.head.next.value).toEqual(7);
  });

  it('he head property will properly point to the first node in the linked list', () => {
  //arrange
    let linkedList = new LinkedList();
    let head1 = 7;
    let head2 = 8;

    //act
    linkedList.insert(head1);
    linkedList.insert(head2);
    //assert
    expect(linkedList.head.value).toEqual(head2);

  });

  it('Can properly insert multiple nodes into the linked list', () => {
    //arrange
    let linkedList = new LinkedList();
    let head1 = 7;
    let head2 = 8;

    //act
    linkedList.insert(head1);
    linkedList.insert(head2);
    //assert
    expect(linkedList.head.value).toEqual(head2);
    expect(linkedList.head.next.value).toEqual(head1);



  });

  it ('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    let value = 7;
    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.includes(value)).toEqual(true);
  });

  it ('Will return false when searching for a value in the linked list that does not exist', () => {
    let linkedList = new LinkedList();
    let value = 7;
    let value2=10;
    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.includes(value2)).toEqual(false);
  });
  it ('Will return false when searching for a value in the linked list that does not exist', () => {

    let linkedList = new LinkedList();
    let value = 7;
    let value2=10;
    let value3 = 11;
 
    linkedList.insert(value);
    linkedList.insert(value2);
    linkedList.insert(value3);

//assert
    expect(linkedList.toString()).toEqual('{ 11 } -> { 10 } -> { 7 } -> NULL');

  });

});
