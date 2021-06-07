'use strict';

const {Node, BinaryTree, BinarySearchTree}=require('./tree.js');
// const {expect}=require('jest');


let tree = null;

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

  });


  it('1- Can successfully instantiate an empty tree',()=>{
    let treeNew = new BinaryTree();
    expect(treeNew.root).toEqual(null);

  });

  it('2- Can successfully instantiate a tree with a single root node',()=>{
    let one = new Node(1);
    let treeNew = new BinaryTree(one);
    expect(treeNew.root.value).toBe(1);

  });
  it('3- Can successfully add a left child and right child to a single root node',()=>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    one.left=two;
    one.right=three;
    let treeNew = new BinaryTree(one);
    expect(treeNew.root.left.value).toEqual(2);
    expect(treeNew.root.right.value).toEqual(3);

  });

  it('4- Can successfully return a collection from a preorder traversal',()=>{

    let preOrderTree=tree.preOrder();
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];

    expect(preOrderTree).toEqual(expected);
  });
  it('5- Can successfully return a collection from an inorder traversal',()=>{
    let inOrderTree=tree.inOrder();
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(inOrderTree).toEqual(expected);
  });

  it('6- Can successfully return a collection from an post order traversal',()=>{
    let postOrderTree=tree.postOrder();
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(postOrderTree).toEqual(expected);
  });
});

describe('Binary Search Tests', () => {
  beforeAll(() => {
    let one = new Node(10);// tree root

    tree=new BinarySearchTree(one);

    //      10
    //    5      15
  });
  it('1- Can successfully add a value to the tree',()=>{
    tree.add(5);
    // tree.add(20);
    expect(tree.root.left.value).toEqual(5);

  });
  it('2- Can successfully add a value to the tree',()=>{

    tree.add(20);
    expect(tree.root.right.value).toEqual(20);

  });

  it('3- Can successfully add a value to the tree',()=>{
    // console.log('tree', tree.root.right.value);
    expect(tree.contains(10)).toBeTruthy();
    expect(tree.contains(1)).toBeFalsy();

  });
  it('4- Can throw an error for a null value',()=>{

    function x(){
      tree.contains(null);
    }
    expect(x).toThrow();

  });
});

describe('Binary Tests for maximum number method', () => {
  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    one.left = two;//
    one.right = three;//
    two.left = six;//
    three.left = four;
    three.right = five;
    tree = new BinaryTree(one);
 
  });

  it('1- Can find the maximum number of the tree I have',()=>{
    let x= tree.findMaximumValue();
    expect(x).toEqual(6);
  });

  it('2- Can throw an error for an empty tree',()=>{
    let treeNew = new BinaryTree();
    function x(){
      treeNew.findMaximumValue();
    }
    expect(x).toThrow();

  });

});











