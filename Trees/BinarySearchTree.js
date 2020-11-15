class BinarySearchTee {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  BFSIterative() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  BFSRecursive() {
    const data = [];
    const traverse = (node, queue = [this.root]) => {
        const currNode = queue.shift();
        if(!currNode && !queue.length) return;
        data.push(currNode.val);
        traverse(currNode.left, queue)
        traverse(currNode.right, queue)
    }
    traverse(this.root);
    return data;
  }

  DFSPreOrderRecursive() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPreOrderIterative() {
     const output = [];
     const stack = [this.root];
     while(stack.length) {
       const curr = stack.pop()
       output.push(curr.value);
       if(curr.right) stack.push(curr.right);
       if(curr.left) stack.push(curr.left);
     } 
     return output;
  }

  DFSPostOrderRecursive() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrderIterative() {

  }

  DFSInOrderRecursive() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrderIterative() {
    const output = [];
    const stack = [];
    let node = this.root;
    while(stack.length || node) {
      while(node) {
        stack.push(node);
        node = node.left;
      }
      const curr = stack.pop();
      output.push(curr.value);
      node = curr.right;
    }
    return output;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const myBST = new BinarySearchTee();
myBST.insert(10);
myBST.insert(7);
myBST.insert(15);
myBST.insert(2);
myBST.insert(6);
myBST.insert(11);
myBST.insert(17);

console.log(myBST.BFSRecursive())

