# Linked Lists
A data structure that contains head, tail and length property

It do not have indexes
Connected via nodes with a next pointer
Random access is not allowed

## Types
1. Singly Linked List
2. Doubly Linked List

## Singly Linked List
Singly Linked Lists are excellent alternatives to arrays whhen insertion and deletion at the beginning are frequently required

### Reverse
1. Swap the head and the tail
2. Create a variable called next
3. Create a variable called prev
4. Create a variable called node and initialize it to the head property
5. Loop through the list
6. Set next to be the next property on whatever the node is
7. Set next property on the node to be whatever the prev is
8. Set prev to be the value of the node variable
9. Set the node variable to be the value of the next variable

### Big O
Insertion - O(1)
Removal - It depends .... O(1) or O(N)
Searching - O(N)
Access - O(N)

## Doubly Linked List
1. Almost identical to the singly linked list except the nodes will also have a previous pointer
2. Better than singly linked lists for finding nodes and can be done in half the time
3. However they do take extra memory considering the extra pointer

More memory === More flexibility

### Big O
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

Technically searching is O(N/2) that is still O(N)