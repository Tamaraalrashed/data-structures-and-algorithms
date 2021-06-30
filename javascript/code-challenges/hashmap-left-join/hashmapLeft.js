'use strict ';
const HashTable=require('../hashTable/hashTable.js');

function leftJoin(leftTable,rightTable){

  const newTable = new HashTable(10);
//  console.log('line 7',newTable);
  for (let key of Object.keys(leftTable.table)){

    let left=leftTable.get(key);

    let right= rightTable.get(key);
    newTable.add(key, [left,right ]);
    
    // console.log('line 15',left,right);
    
  }
  return newTable;
}

module.exports=leftJoin;
