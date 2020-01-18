# Binary Heap
It is also a type of binary tree. Binary heap is as compact as possible

## Types
1. Max binary heap - Where parent node is always greater than the child nodes
2. Min binary heap - where parent node is always smaller than the child nodes

## Implementation using Lists/ Array
A binary heap can be represented using built in data structure like Array.

To find the left node: `2n + 1`
To find the right node: `2n + 1`

To find the parent of a node: `Math.floor((n-1)/2)`

## Max Binary Heap

Insert - Push the element to an array and bubble up until it finds its place by comparing it with its parent

## Removing 
It is also called as extract max
1. Swap the first value in the array with the last one
2. Pop from the values property so that you can return at the end
   1. Your parent inde starts at 0(the root)
   2. find the index of the left child (2n + 1)
   3. Find the index of the right child (2n + 2)
   4. If the right or left node is greater than the parent, then swap. If both are greater then swap with the greatest
   5. The child index you swapped witll now become the parent index
   6. Keep looping and swapping until neither child is larger than the element
   7. Return the old root

## Performance
Insertion - O(log N)
Removal - O(log N)
search - O(N)