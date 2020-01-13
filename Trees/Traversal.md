# Tree Traversal
To visit each and every nodes in a tree no matter whether it is sorted or unsorted, binary or not binary

## Types
1. Breadth first search
2. Depth first search

## Breadth First Search
1. Create a queue to store all the visited nodes
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
   1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
   2. If there is a left property on the node dequeued - add it to the queue
   3. If there is a right property on the node dequeued - add it to the queue
4. Return the variable that stores the values

Please refer Binary Search Tree implementation for BFS implementation details


## Depth First search
There are three main methods in depth first search to visit all the nodes.
1. Pre Order
2. Post Order
3. In Order

## Example tree
              10
            6   15
          3   8   20

### Pre Order
Start with the root, traverse the left then traverse the right of each node
#### Steps
1. Create a variable to store the values of the nodes visited
2. Store the root of the tree in variable called current
3. Write an helper function which accepts a node
  1. Push the value of the nodes to the variable that stores the values
  2. If the node has a left property, call the helper function with the left property on the node
  3. If the node has a right property, call the helper function with the right property on the node
4. Invoke the helper function with the current variable
5. Return the array of values

Output: [10, 6, 3, 8, 15, 20]

### Post Order
Explore everything first. Go all the way to the left, go all the way to the right and keep adding the nodes
#### Steps
1. Create a variable to store the values of the nodes visited
2. Store the root of the tree in variable called current
3. Write an helper function which accepts a node
  1. If the node has a left property, call the helper function with the left property on the node
  2. If the node has a right property, call the helper function with the right property on the node
  3. Push the value of the nodes to the variable that stores the values
4. Invoke the helper function with the current variable
5. Return the array of values

Output: [3, 8, 6, 20, 15, 10]

### In Order
Traverse the entire left, visit the node, traverse the entire right

Output: [3, 6, 8, 10, 15, 20]