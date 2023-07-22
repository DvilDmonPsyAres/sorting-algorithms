const { BinarySearchTree, TreeNode } = require('./binarySearchTreeModel.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let node = rootNode;
  let min = rootNode.val;
  while(node) {
    min = node.val;
    node = node.left;
  }
  return min;
}

function findMaxBST (rootNode) {
  // Your code here

  let node = rootNode;
  let max = rootNode.val;
  while(node) {
    max = node.val;
    node = node.right;
  }
  return max;
}

function findMinBT (rootNode) {
  // Your code here
  let node = rootNode;
  if(!node) {
    return;
  }

  let min = node.val;

  function helperSearch(node) {
    if(node.val < min) {
      min = node.val
    }
    if(node.left) {
      helperSearch(node.left);
    }
    if(node.right) {
      helperSearch(node.right);
    }
  }

  if(node.left) {
    helperSearch(node.left);
  }
  if(node.right) {
    helperSearch(node.right);
  }

  return min;
}

function findMaxBT (rootNode) {
//   Your code here
  let node = rootNode;
  if(!node) {
    return;
  }
  let max = node.val;
  function helperSearch(node) {
    if(node.val > max) {
      max = node.val;
    }
    if(node.left) {
      helperSearch(node.left);
    }
    if(node.right) {
      helperSearch(node.right);
    }
  }
  if(node.left) {
    helperSearch(node.left);
  }
  if(node.right) {
    helperSearch(node.right);
  }
  return max;

    // // Base case: If the root node is null (empty tree), return null.
    // if (!rootNode) {
    //     return null;
    //   }

    //   // Recursive case: Compare the value of the current node with the maximum values
    //   // from the left and right subtrees, and return the maximum value.
    //   const leftMax = findMaxBT(rootNode.left);
    //   const rightMax = findMaxBT(rootNode.right);

    //   // Find the maximum value between the current node value and the maximum values from left and right subtrees.
    //   let max = rootNode.value;
    //   if (leftMax !== null && leftMax > max) {
    //     max = leftMax;
    //   }
    //   if (rightMax !== null && rightMax > max) {
    //     max = rightMax;
    //   }

    //   return max;
}

function getHeight (rootNode) {
  // Your code here
  if(!rootNode) {
    return -1;
  }
  if(!rootNode.left && !rootNode.right) {
    return 0;
  }
  // Recursively find the height of the left and right subtrees.
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  // The height of the tree at the current node is the maximum of the left and right subtrees,
  // plus one to account for the current node.
  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree (rootNode) {
  // Your code here

}

function countNodes (rootNode) {
  // Your code here
//   currentNode = rootNode
//   let counter = 0;
//   let queue = []
//   queue.push(currentNode);
//   while(queue.length > 0) {
//     let node = queue.shift()
//     counter++;
//     if(node) {
//       if(node.left) {
//         queue.push(node.left);
//       }
//       if(node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
//   return counter;
if (!rootNode) {
    return 0;
  }

  // Recursive case: Count the nodes in the left and right subtrees,
  // then add 1 for the current node.
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode (rootNode, target) {
  // Your code here
  // Your code here
  function findParent(node, target, parent = null) {
    if (!node) {
      return null; // Target node not found in the current subtree
    }

    if (node.val === target) {
      return parent; // Return the parent node
    }

    const leftResult = findParent(node.left, target, node);
    if (leftResult) {
      return leftResult;
    }

    const rightResult = findParent(node.right, target, node);
    if (rightResult) {
      return rightResult;
    }

    return undefined; // Target node not found in the current subtree
  }

  return findParent(rootNode, target);

}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

    btRoot = new TreeNode(1);
    btRoot.left = new TreeNode(2);
    btRoot.left.left = new TreeNode(4);
    btRoot.left.right = new TreeNode(5);
    btRoot.right = new TreeNode(3);
    btRoot.right.left = new TreeNode(6);
    btRoot.right.right = new TreeNode(7);

    btRootBig = new TreeNode(13);
    btRootBig.left = new TreeNode(2);
    btRootBig.right = new TreeNode(3);
    btRootBig.left.left = new TreeNode(4);
    btRootBig.left.right = new TreeNode(5);
    btRootBig.right.right = new TreeNode(6);
    btRootBig.left.left.left = new TreeNode(7);
    btRootBig.left.right.left = new TreeNode(8);
    btRootBig.left.right.right = new TreeNode(9);
    btRootBig.right.right.right = new TreeNode(10);
    btRootBig.left.right.right.left = new TreeNode(11);
    btRootBig.right.right.right.right = new TreeNode(12);
    btRootBig.right.right.right.right.left = new TreeNode(1);


    btRootUnbalanced = new TreeNode(4);
    btRootUnbalanced.right = new TreeNode(3);
    btRootUnbalanced.right.right = new TreeNode(2);
    btRootUnbalanced.right.right.right = new TreeNode(1);
    btRootUnbalanced.right.right.right.right = new TreeNode(7);
    btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);


    bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);

    bstRootBig = new TreeNode(8);
    bstRootBig.left = new TreeNode(3);
    bstRootBig.left.left = new TreeNode(2);
    bstRootBig.left.left.left = new TreeNode(1);
    bstRootBig.left.right = new TreeNode(5);
    bstRootBig.left.right.left = new TreeNode(4);
    bstRootBig.left.right.right = new TreeNode(7);
    bstRootBig.left.right.right.left = new TreeNode(6);
    bstRootBig.right = new TreeNode(10);
    bstRootBig.right.right = new TreeNode(11);
    bstRootBig.right.right.right = new TreeNode(12);
    bstRootBig.right.right.right.right = new TreeNode(15);
    bstRootBig.right.right.right.right.left = new TreeNode(14);

    bstRootUnbalanced = new TreeNode(1);
    bstRootUnbalanced.right = new TreeNode(2);
    bstRootUnbalanced.right.right = new TreeNode(3);
    bstRootUnbalanced.right.right.right = new TreeNode(4);
    bstRootUnbalanced.right.right.right.right = new TreeNode(5);
    bstRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    bstRootUnbalanced.right.right.right.right.right.right = new TreeNode(7);

console.log(countNodes(bstRoot)); // 7
console.log(countNodes(bstRootUnbalanced));// 7
console.log(countNodes(btRootBig));// 13

console.log(findMaxBT(btRootBig))// 13
console.log(findMaxBT(bstRootUnbalanced)) // 7
console.log(findMaxBT(bstRootBig)) // 15
