'use strict';
const LinkedList= require('../../linked-list/linked-list');

class HashTable{

  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let hash = 0;
    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;

    return hash;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }

    let keyValuePair = { [key]: value };

    this.table[hash].add(keyValuePair);
  }

  get(key) {
    let array = [];
    let hash = this.hash(key);
    if(this.table[hash]){
      this.table.map((obj) => {
        let current = obj.head.value;
        if(Object.keys(current) === key){
          array.push(Object.values(current));
          return Object.values(current);
        }
      });
    }
    return array;

  }

  contains(key) {
    if (!this.get(key)) {
      return false;
    }
    else {
      return true;
    }

  }
}




module.exports=HashTable;


