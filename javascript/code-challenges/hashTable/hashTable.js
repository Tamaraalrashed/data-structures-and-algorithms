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
      // this.table[hash] = new LinkedList();
      this.table[hash] = [[key, value]];
    }

    // let keyValuePair = { [key]: value };

    // this.table[hash].insert(keyValuePair);
    this.table[hash] = [[key, value]];
  }

  get(key) {

    let hash = this.hash(key);
    const items = this.table[hash];
   
    if(items) {

      for (let i = 0; i < items.length; i++) {
        if (items[i][0] === key) {
          return items[i][1];
        }

      }
    }

  

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


