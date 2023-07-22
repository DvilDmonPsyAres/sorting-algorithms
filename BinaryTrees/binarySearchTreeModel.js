// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor(root) {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      // Your code here


      if(this.root === null) {
        this.root = new TreeNode(val);
      } else {
        if(val <= currentNode.val) {
          if(currentNode.left === null) {
            currentNode.left = new TreeNode(val)
          } else {
            this.insert(val, currentNode.left);
          }
        } else {
          if(currentNode.right === null) {
            currentNode.right = new TreeNode(val);
          } else {
            this.insert(val, currentNode.right)
          }
        }
      }
    }

    search(val) {
      // Your code here
      function searchHelper(currentNode) {
        if (!currentNode) {
          return false;
        }

        if (currentNode.val === val) {
          return true;
        } else if (val < currentNode.val) {
          return searchHelper(currentNode.left);
        } else {
          return searchHelper(currentNode.right);
        }
      }

      return searchHelper(this.root);
    }

        //      4
        //    /   \
        //   2     6
        //  / \   / \
        // 1   3 5   7


    preOrderTraversal(currentNode = this.root) {
      // Your code here
      currentNode = this.root;
      const queue = [];
      queue.push(currentNode);
      console.log(queue.shift().val);
      queue.push(currentNode.left);

      while(queue.length > 0) {
        let node = queue.shift();

        if(node) {
          console.log(node.val);

          queue.push(node.left);
          queue.push(node.right);
        }

      }

      queue.push(currentNode.right);
      while(queue.length > 0) {
        let node = queue.shift();
        if(node) {
          console.log(node.val);

          queue.push(node.left);
          queue.push(node.right);
        }

      }
    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here
      currentNode = this.root;
      const queue = [];
      queue.push(currentNode);
      let newArr = [];
      // newArr.push(currentNode);

      while(queue.length > 0) {
        let node = queue.shift();
        if(node) {
          newArr.push(node.val);

          queue.push(node.left);
          queue.push(node.right);
        }

      }
      function compareNumbers(a, b) {
        return a - b;
      }

    let result = newArr.sort(compareNumbers)

      for(let i = 0; i < result.length; i++) {
        console.log(result[i]);
      }


    }

        //      4
        //    /   \
        //   2     6
        //  / \   / \
        // 1   3 5   7

    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode === null) {
        return;
      }

      // Visit left subtree
      this.postOrderTraversal(currentNode.left);

      // Visit right subtree
      this.postOrderTraversal(currentNode.right);

      // Visit the root node
      console.log(currentNode.val); // Assuming there's a `value` property in the tree node

    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      // initialize a stack with the root node
      let stack = [this.root];

      // while the stack is not empty
      while(stack.length > 0) {
        // print and remove first node in stack
        let node = stack.shift();
        console.log(node.val)
        // if the node has a left node
        if(node.left) {
          // push the left node on the back of the stack
          stack.push(node.left);
        }
        // if the node has a right node
        if(node.right) {
          // push the right node on the back of the stack
          stack.push(node.right)
        }


      }

    }
        //      4
        //    /   \
        //   2     6
        //  / \   / \
        // 1   3 5   7
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      // initialize a queue with the root node

      let node = this.root;
      let queue = [node];
      // while the queue is not empty
      while(queue.length > 0) {
        // print and remove first node in queue
        node = queue.pop();
        console.log(node.val)


        // if the node has a left node
        if(node.left) {
          // push the left node on the back of the queue
          queue.push(node.left)
        }
        // if the node has a right node
        if(node.right) {
          // push the right node on the back of the queue
          queue.push(node.right);
        }
      }

    }
  }
  // let bst = new BinarySearchTree()

  // bst.insert(4);
  // bst.insert(2);
  // bst.insert(6);
  // bst.insert(1);
  // bst.insert(3);
  // bst.insert(5);
  // bst.insert(7);
  // console.log(bst)
  // console.log(bst.preOrderTraversal(bst))
  // console.log(bst.inOrderTraversal(bst))

  module.exports = { BinarySearchTree, TreeNode };
