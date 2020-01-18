# Dijkstra's Algorithm
It is an algorithm to findout the shortest path between two vertices in a weighted graph

## Pseudocode
1. This function should accept a starting and ending vertex
2. Create an object(we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
3. After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
4. Create another object called previous and set key to be every vertex in the adjacency list with a value of null
5. Start looping as long as if anything is there in the priority queue
    1. Dequeue vertex from the priority queue
    2. If that vertex is same as the ending vertex, we are done
    3. Otherwise loop through each value in the adjacency list at that vertex
        1. Calculate the distance to that vertex from the starting vertex
        2. If the distance is less than from what we stored in our distances object
            1. Update the distances object with the new lower distance
            2. Update the previous object to contain that vertex
            3. Enqueue the vertex with the total distance from the start node