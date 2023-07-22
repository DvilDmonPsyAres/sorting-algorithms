
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

    searchBST(root, target) {
        if(target === root.value) return true;

        if(target < root.value) return root.searchBST(root.left, target)

        if(target > root.value) return root.searchBST(root.right, target)

        return -1;
    }
}

class ThreeNode extends MyBinaryTreeNode{
    constructor(value) {
        super(value)
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

let bts = new MyBinaryTreeNode(18);
bts.add(new ThreeNode(21));
bts.add(new ThreeNode(15));
bts.add(new ThreeNode(16));
console.log(bts);
console.log(bts.searchBST(16))
