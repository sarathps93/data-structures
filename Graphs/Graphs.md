# Graph data structure

## Uses
1. Social Networks
2. Location / Mapping
3. Routing Algorithms
4. Visual Hierarchy
5. File system optimisation

## Terminologies
1. Vertex - Any node
2. Edge - Lines connecting the vertices

## Types of Graphs
1. Directed Graph - Directions assigned to an Edge
2. Undirected Graph - No specific directions assigned to an Edge
3. Weighted Graph - Specific value assigined to an Edge
4. Unweighted Graph - No spcific value assigned to an Edge

## How do we store Graph data?
There are two approaches used for saving a graph data viz., `Adjacency Matrix` and `Adjacency List`

### Adjacency Matrix
Saving the graph connection data in a 2 dimentional maxtrix [For eg: A 2D array]

1. Take up more space in sparce graphs
2. Slower to iterate over all edges
3. Faster to lookup for a specific edge

### Adjacency List
Saving the graph connection data using a hash map with connection values as arrays

1. Take up less space in sparce graphs
2. Fatster to iterate over all edges
3. Can be slower to lookup for specific edge

## Big O of Adjacency Matrix and Adjacency List
V --> Number of vertices
E --> Number of Edges

| Operation     | Adjacency List  | Adjacency Matrix  |
|---------------|-----------------|-------------------|
| Add Vertex    | O(1)            | O(V^2)            |
| Add Edge      | O(1)            | O(1)              |
| Remove Vertex | O(V + E)        | O(V^2)            |
| Remove Edge   | O(E)            | O(1)              |
| Query         | O(V + E)        | O(1)              |
| Storage       | O(V + E)        | O(V^2)            |


## Other points
* A directed graph can have atmost `n(n - 1)` edges
* An undirected graph can have atmost `n(n - 1) / 2` edges