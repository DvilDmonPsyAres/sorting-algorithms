const Queue = require('./queue');

class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.rigth = null;
    }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f')

a.left = b;
a.rigth = c;
b.left = d;
b.rigth = e;
c.rigth = f;

console.log(a);

function binaryTreeSearch(root, target) {
    //base case: If tree is null return false
    if(root === null) return false;

    //if the current node`s value equals the target, return true
    if(root.value === target) return true;

    //Otherwise, search the left subtree for the target
    if(binaryTreeSearch(root.left, target)) return true;

    // If the value isn`t in the left subtree, try the rigth subtreeç
    return binaryTreeSearch(root.rigth, target);
}

console.log(binaryTreeSearch(a, "z"))


function binaryTreeSum(root) {
    //check the base case
    if (root === null) return 0;

    //Recursively sum up the left and rigth trees
    const leftSum = binaryTreeSum(root.left);
    const rigthSum = binaryTreeSum(root.rigth);

    //return the value pls the left and rigth totals
    return root.value + leftSum + rigthSum;

}

let ticket1 = new TreeNode(20);
let ticket2 = new TreeNode(15);
let ticket3 = new TreeNode(5);
let ticket4 = new TreeNode(18);
let ticket5 = new TreeNode(36);
let ticket6 = new TreeNode(6);
ticket1.left = ticket2;
ticket1.right = ticket3;
ticket2.left = ticket4;
ticket2.right = ticket5;
ticket3.right = ticket6;

console.log(binaryTreeSum(ticket1))


function breadthFirstTraversal(root) {
    //put the starting node in a queue
    const queue = new Queue();
    queue.enqueue(root);

    //while the queue is not empty
    while(queue.length > 0) {
        //dequeue a node and print it
        let node = queue.dequeue();
        if(node)  {
            console.log(node.value);


        //put all of the node`s children in the back of the queue
        queue.enqueue(node.left);
        queue.enqueue(node.right);
        }
    }
}

console.log(breadthFirstTraversal(ticket1));

function breadthFirstTraversalArray(root) {
    //put starting node in a queue
    const queue = [];
    queue.push(root);

    //qhile the queue is not empty
    while(queue.length > 0) {
        //dequeue a node and print it
        let node = queue.shift();
        if(node) {
            console.log(node.value);

            //put all of the node`s children in the back of the queue
            queue.push(node.left);
            queue.push(node.right);
        }
        // console.log(queue)
    }
}

console.log(breadthFirstTraversalArray(ticket1))


function depthFirstTraversalStack(root) {

    // Put the starting node on a stack
    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        // Pop a node and print it
        let node = stack.pop();
        if(node) {
            console.log(node.value);

            // Put all of the node's children on the top of the stack
            stack.push(node.right);
            stack.push(node.left);
        }

    }
}

console.log(depthFirstTraversalStack(ticket1))
