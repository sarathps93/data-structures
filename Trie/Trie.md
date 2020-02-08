# Trie
A data structure for faster insertion, search and deletion of strings. Very useful for search engines or somewhere where we have to retrieve a string in almost constant time.

It makes use of a tree for saving all the possible combinations of alphabets to retrieve a word.

## Definition
A trie is a tree like data structure wherein the nodes of the tree store the entire alphabet, and strings/words can be retrieved by traversing down a branch path of the tree.

The shape and structure of a trie is always a set of linked nodes, all connecting back to an empty root node. Each node contains an array of pointers (child nodes), one for each possible alphabetic value.

The size of a trie is directly correlated to the size of all the possible values that the trie could represent.

## Big O
The worst case performance of a trie is O(mn) where m is the length of the string and n in the number of keys in the trie