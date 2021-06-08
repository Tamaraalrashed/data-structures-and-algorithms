'use strict';


const {fizzBuzzTree,K_aryTree,Node}=require('./fizz-buzz-tree.js');





describe('fizzBuzzTree Test', () => {
  let node = new K_aryTree(10);
  node.root.children[0]=new Node(5);
  node.root.children[1]=new Node(2);
  node.root.children[2]=new Node(3);
  node.root.children[0].children[0]= new Node(7);
  node.root.children[1].children[0]= new Node(2);  
  node.root.children[1].children[1]= new Node(4);
  node.root.children[2].children[0]= new Node(30);
  node.root.children[2].children[1]= new Node(6);
  node.root.children[2].children[2]= new Node(1);

  it('should ', () => {
    expect(fizzBuzzTree(node)).toEqual( {"root": {"children": ["Buzz", "Buzz", "7", "2", "2", "4", "Fizz", "FizzBuzz", "Fizz", "1"], "value": null}});
  });


});
