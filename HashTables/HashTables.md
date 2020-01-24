# Hash Tables
Hash tables are used to store key value pairs. They are like arrays but keys are not ordered.

## Implementation using Array
In order to look up values by key, we need a way to convert key into valid array indices
The function that performs this tasks are called `hash functions`.

## Hash Functions
A function that takes argument of arbitrary length and returns a value of fixed length

1. It should be fast (constant time)
2. Doesn't cluster inputs at specific indices, but distributes uniformly
3. Deterministic (Same input yields same output)

### Handle Collisions
Even with a large array and a great hash function, collisions are inevitable;
1. Separate Chaining
    1. With separate chaining, at each index in our array we store values using a more sophisticated data structure (eg: Array or Linked list)
    2. This allows us to store multiple key-value pairs at the same index
2. Linear Probing
    1. With linear probing, we store only one value at a specific index
    2. When we find a collision, we search through the array to find next empty slot

## Big O
Insertion - O(1)
Deletion - O(1)
Access - O(1)