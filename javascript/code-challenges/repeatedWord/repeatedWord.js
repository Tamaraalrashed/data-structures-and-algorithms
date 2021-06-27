'use strict';
const Table=require('../hashTable/hashTable.js');
function repeatedWord(str){

  const newTable = new Table(7);
  if (typeof(str)!== 'string') throw new Error('please enter a string');

  let string=str.toLowerCase().split(' ');

  for(const prop in string){

    if(newTable.contains(string[prop])){

      return newTable.get(string[prop]);

    }

    newTable.add(string[prop], string[prop]);
    // console.log('out-------',newTable);
  }

}



module.exports=repeatedWord;
