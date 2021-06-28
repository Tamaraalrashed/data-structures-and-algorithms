'use strict';
const {expect} = require('@jest/globals');
const treeIntersection=require('./treeIntersection');

const {Node, BinaryTree}=require('../../tree/tree.js');
// const {expect}=require('jest');


let tree = null;
let tree1 = null;

describe('Binary Tree', () => {
  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    //             1
    //     2               3
    // 6        -      4       5
    //     7
    // 8       9
    tree = new BinaryTree(one);

    let eleven = new Node(11);// tree root
    two = new Node(2);
    three = new Node(3);
    let twelve = new Node(12);
    five = new Node(5);
    let thirteen = new Node(13);
    seven = new Node(7);
    let fourteen = new Node(14);
    nine = new Node(9);


    eleven.left = two;//
    eleven.right = three;//
    two.left = five;//
    twelve.right = seven;
    seven.left = thirteen;
    seven.right = fourteen;
    three.left = nine;

    tree1=new BinaryTree(eleven);

  });


  it('1- Can successfully give the whole nodes in the tree when I checked the the intersection for the same tree',()=>{

    let z= treeIntersection(tree,tree);
   
    expect(z).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);

  });
  it('2- Can successfully return the intersection of two different trees inside an arrray',()=>{

    let z= treeIntersection(tree,tree1);

    expect(z).toEqual([2]);

  });
  it('3- throw an error when there is no entries passed in the function',()=>{
    
    let x=function(){
      treeIntersection();
    };
    expect(x).toThrow('Exception');

  });
});


















