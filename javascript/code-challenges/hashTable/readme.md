# Hash tables
A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hash table, it is used to determine the index of the array.


## Challenge
Implement hash table with four methods:add, get, contains, and hash.

## API

1. add : 
- Arguments: key, value
- Returns: nothing
- This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. get :
- Arguments: key
- Returns: Value associated with that key in the table
3. contains :
- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.
4. hash : 
- Arguments: key
- Returns: Index in the collection for that key
 
## Approach & Efficiency

### Big O <br>
* for method add :
  - time -> O(n)
  - Space->O(n)
 
 <br>

* for method get :
  - time -> O(n)
  - Space->O(1)
 
 <br>

* for method contains :
  * Time -> O(1)
  * Space ->O(1)
  
* for method hash :
   * Time-> O(n)
   * Space-> O(1)



## Whiteboard

![img](./img/hashTableWhiteBoard.JPG)
<br>


## Solution

[CLICK ON ME FOR SOLUTION CODE](./hashTable.js)