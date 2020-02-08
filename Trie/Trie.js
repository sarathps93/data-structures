class TrieNode {
  constructor(letter = "") {
    this.val = letter;
    this.children = {};
    this.completesString = false;
  }
}

class Trie {
  constructor() {
    this.rootNode = new TrieNode();
  }
  insert(word) {
    let node = this.rootNode;

    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      if (node.children[currentLetter]) {
        node = node.children[currentLetter];
      } else {
        let newNode = new TrieNode(currentLetter);
        node.children[currentLetter] = newNode;
        node = newNode;
      }
    }

    node.completesString = true;
  }
  find(word) {
    let node = this.rootNode;

    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      if (node.children[currentLetter]) {
        node = node.children[currentLetter];
      } else {
        return false;
      }
    }

    return true;
  }
  remove(word) {
    let node = this.rootNode;
    let suffixes = [];

    // for cases where no part of the word can be removed from the trie
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      if (node.children[currentLetter]) {
        node = node.children[currentLetter];
        suffixes.unshift(node);
      }
      if (i === word.length - 1 && Object.keys(node.children).length) {
        throw new Error(`Suffixes in trie depends on word ${word}`);
      }
    }
    // for cases where some part of the word can be removed from the trie
    for (let j = 1; j < suffixes.length; j++) {
      let parent = suffixes[j];
      let child = word[suffixes.length - j];
      delete parent.children[child];
      if (parent.completesString || Object.keys(parent.children).length) {
        return `Some suffixes of ${word} removed from the trie`;
      }
    }

    // for cases where all parts of the word can be removed from the trie
    delete this.rootNode.children[word[0]];
    return true;
  }
}
