# Priority Queue
A data structure where each element has a priority. Element with higher priorities are served before element with lower priorities.

It is different from Heaps. We can implement priority queues using Arrays or lists as well.

## Implementation using Min Binary Heap
1. Write a Min Binary Heap - Lower number means highest priority
2. Each Node has a value and a priority. Use the priority to build the heap
3. Enqueue method accepts a value and a priority, makes a new node and puts it in the right spot based off on its priority
4. Dequeue method removes root element, returns it and rearrages heap using priority