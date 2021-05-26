
'use strict';
// Require our linked list implementation
const LinkedList = require('../linked-list.js');


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
  it ('Can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();
    let value = 7;
    let newValue = 10;
    //act
    linkedList.insert(value);
    linkedList.append(newValue);
    //assert
    expect(linkedList.head.next.value).toEqual(newValue);
  });
  it ('Can successfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();
    let value1= 7;
    let value2 = 10;
    let value3 = 12;

    //act
    linkedList.insert(value1);
    linkedList.append(value2);
    linkedList.append(value3);
    //assert
    expect(linkedList.head.next.next.value).toEqual(value3);
  });

  it ('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let linkedList = new LinkedList();
    let value1= 7;
    let value2 = 10;
    let value3 = 12;
    let value4 = 14;
    let value5 = 16;
    //act
    linkedList.insert(value1);
    linkedList.insert(value2);
    linkedList.insert(value3);
    linkedList.insert(value4);
    linkedList.insertBefore(value3,value5);
    //assert
    expect(linkedList.head.next.value).toEqual(value5);
  });

  it('Can successfully insert a node before the first node of a linked list',() => {
    let linkedList = new LinkedList();
    //act
    linkedList.insert(8);
    linkedList.insertBefore(8,10);
    //assert
    expect(linkedList.head.value).toEqual(10);
  });

  it('Can successfully insert after a node in the middle of the linked list',() => {
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertAfter(2,4);
    //assert
    expect(linkedList.toString()).toEqual('{ 3 } -> { 2 } -> { 4 } -> { 1 } -> NULL');
  });

  it('should successfully insert a node after the last node of the linked list',() => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insertAfter(1,3);
    //assert
    expect(linkedList.head.next.next.value).toEqual(3);
  });

  it('k is greater than the length of the linked list',() => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    function x(){
      linkedList.kthFromEnd(4);
    }

    //assert
    expect(x).toThrow();
  });

  it('k and the length of the list are the same',() => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    function x(){
      linkedList.kthFromEnd(3);
    }
    //assert
    expect(x).toThrow();
  });

  it('k is not a positive integer',() => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    function x(){
      linkedList.kthFromEnd(-1);
    }
    //assert
    expect(x).toThrow('You did not insert  k value or k is negative value');
  });


  it('the linked list is of a size 1',() => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    let kValue = linkedList.kthFromEnd(0);
    expect(kValue.value).toEqual(1);
  });
  it('should return the value except the end or the beginning',() => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    let kValue =  linkedList.kthFromEnd(2);
    //assert
    expect(kValue.value).toEqual(3);
  });


});
