class MyBinaryTreeNode {

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
    add(node) {
        if(node.value <= this.value) {
            if(this.left === null) {
                this.left = node;
            } else {
              this.left.add(node);
            }

        } else {
            if(this.right === null) {
                this.right = node;
            } else {
                this.right.add(node)
            }

        }
    }
}

function searchBST(root, target) {
    if(root === null) return false;

    if(target === root.value) return true;

    if(target < root.value) return searchBST(root.left, target);

    if(target > root.value) return searchBST(root.right, target);
}

//This can be performed Iteratively

function searchBSTIteratively(root, target) {
    let currentNode = root;

    while(currentNode !== null) {
        if(target === currentNode.vale) return true;
        if(target < currentNode.value) currentNode = currentNode.left;
        if(target > currentNode.value) currentNode = currentNode.right;
    }
    return false;
}
