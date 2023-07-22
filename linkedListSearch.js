function linkedListSearch(linkedList, target) {
    //base case: empty list
    if(linkedList.head === null) return false;

    //check if the current node's value matches the target
    if(linkedList.head.value === target) return true;

    //if not, recursively search the rest of the list
    return linkedListSearch(linkedList.head.next);
}
