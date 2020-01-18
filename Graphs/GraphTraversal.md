# Depth First Search

## Steps - Recursive Solution
1. If vertex is empty, return (this is the base case)
2. Add vertex to the results list
3. Mark vertex as visited
4. For each neighbor in vertex's neigbors - if the neighbor is not visited - rescursively call DFS on neighbor

## Steps - Iterative Solution
let S be a stack
S.push(start)
while S is not empty
  vertex = S.pop();
  if vertex is not labelled as discovered
    visit vertex (add to the results list)
    label vertex as discovered
    for each of vertex's neighbors, N do S.push(N)

1. The function should start a starting node
2. Create a stack to help to use keep track of vertices
3. Create a list to store the end result, to be returned at the very end
4. Create an object to store visited vertices
5. Add the starting vertex to the stack and mark it as visited
6. While stack has something in it
    1. Mark it as visited
    2. Add it to the result list
    3. Push all of its neighbors into the stack

# Breadth First Search

## Steps
1. This function should accept a starting vertex
2. Create a queue and place the starting vertex in it
3. Create an array to store the nodes visited
4. Create an object to store the nodes visited
5. Mark the starting vertex as visited
6. Loop as long as there is anything in the queue
7. Remove the first verted from the queue and push it into the array that stores the nodes  visited
8. Loop of each vertex in the adjacency list for the vertex you are visiting
9. If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex 
10. Once you have finished looping, return the array of visited nodes