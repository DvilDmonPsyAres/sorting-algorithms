class BinaryTree {
    constructor(root) {
        this.root = null;
    }
}

class BtNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const bt = new BinaryTree()
const bt2 = new BinaryTree()
bt.root = new BtNode(5)
bt2.root = new BtNode(5)
bt.root.next = new BtNode(4)
bt2.root.next = new BtNode(4)
bt.root.next.next = new BtNode(3)
bt2.root.next.next = new BtNode(2)
bt2.root.next.next.next = new BtNode(3)

function isSameBT(bt1, bt2) {

    if(bt1.root.val !== bt2.root.val) return false;

    //helper function
    const checkNodes = (node1, node2) => {
        console.log(`node 1 val: ${node1.val}`)
        console.log(`node 2 val: ${node2.val}`)

        if(node1.val !== node2.val) {
            return false;
        }

        if(node1.next && !node2.next) {
            return false;
        }

        if(node1.next && node2.next) {
            return checkNodes(node1.next, node2.next);
        }

        return true;
    }

    return checkNodes(bt1.root.next, bt2.root.next);
}

console.log(isSameBT(bt, bt2));
