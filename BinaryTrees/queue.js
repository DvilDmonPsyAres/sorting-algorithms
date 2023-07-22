class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {

        const newNode = new Node(val);
        if(this.head === null) {
            //if queue is empty but head and tail point to the newNode
            this.tail = newNode;
            this.head = newNode;
        } else {
            //add the new node to the end of the queue and update the tail pointer
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;
    }

    dequeue() {
        if(this.head === null) {
            return null;
        }
        let value = this.head.value;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return value;
    }
}

module.exports = Queue;
