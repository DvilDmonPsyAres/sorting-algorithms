function insertionSortInPlace(arr) {

    //set pointer to the last sorted Index;
    for(let i = 1; i < arr.length; i++) {
        // loop over the array in bakwards
        let j = i;
        // set end of the loop over the last arr element
        // if left el is greater swap els
        while(j >= 0 && arr[j-1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j-1]
            arr[j-1] = temp;
            //loop down one index
            j--;
        }
        //take the next unorder element in the array
    }
    return arr;
}

let arr = [9,8,7,6,5,4,3,2,1];
console.log(insertionSortInPlace(arr))
