'use strict ';
const HashTable=require('../hashTable/hashTable.js');

function leftJoin(leftTable,rightTable){

  const newTable = new HashTable(10);
  console.log('line 7',leftTable.table[0].head.value);
  let values=leftTable.table.map(item=>{

    return Object.keys(item.head.value);
  });
  console.log('133', values);

  for (let key of values){
    // console.log('dddd',typeof(key[0]) );
    if(key)
    {let left=leftTable.get(key[0]);
      console.log('dddd', Object.values(left.head.value) );

      let right= rightTable.get(key[0]);
      if(right){
        newTable.add(key[0],[...Object.values(left.head.value),...Object.values(right.head.value) ]);
      }
      else{
        newTable.add(key[0], [...Object.values(left.head.value) ]);
      }
    }

    // console.log('line 15',left,right);

  }

  return newTable;
}

module.exports=leftJoin;
