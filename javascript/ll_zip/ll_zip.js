'use strict';

const LinkedList=require('../linked-list/linked-list.js');

function zipLists( ll1,ll2 ){

  let zipLists = new LinkedList () ;

  let linkedList1 = ll1.head ;
  let linkedList12 = ll2.head;

  if ( linkedList1===null && linkedList12===null ){
    throw new Error( 'there is no linked list entered here' );
  }
  else{

    while( linkedList1 || linkedList12 ){
      if (linkedList1){

        zipLists.append( linkedList1.value );

        linkedList1 = linkedList1.next ;
      }
      if(linkedList12){

        zipLists.append( linkedList12.value );
        linkedList12 = linkedList12.next ;
      }
    }

    return zipLists.toString ();
  }
}
module.exports = zipLists ;



