'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}


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
      // this.table[hash] = [[key, value]];
    }

    let keyValuePair = { [key]: value };

    this.table[hash].add(keyValuePair);
    // this.table[hash] = [[key, value]];
  }


  get(key) {
    let hashedKey = this.hash(key);

    if (this.table[hashedKey]) {
      return this.table[hashedKey];
    } else {
      return null;
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



