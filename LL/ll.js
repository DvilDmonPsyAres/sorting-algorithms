class LL {
    constructor(head) {
        this.head = head;
        this.next = null;
    }
}

class Llnode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const ll = new LL(5);
ll.next = new Llnode(4);
ll.next.next = new Llnode(2);
ll.next.next.next = new Llnode(7);
ll.next.next.next.next = new Llnode(18);

// console.log(ll)

function getReversedLL(ll) {
    let newArr = [];
    if(ll.head) {
        newArr.unshift(ll.head);
    }
    if(ll.next) {
        ll = ll.next
    }
    while(ll) {
        newArr.unshift(ll.val)
        ll = ll.next
    }
    return newArr;
}

function reversedLL(arr) {
    let ll = new LL(arr.shift())

    let current = ll

    while(arr.length > 0) {
        let newNode = new Llnode(arr.shift());
        current.next = newNode
        current = newNode
    }

    return ll;
}
console.log(reversedLL(getReversedLL(ll)))
