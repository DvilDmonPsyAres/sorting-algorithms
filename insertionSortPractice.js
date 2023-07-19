
function insertionSort(arr) {
    let copy = arr.slice();
    let sorted = []
    while(copy.length !== 0) {
        console.log(sorted.join(","))
        let insert = copy.pop();
        let backIndex = sorted.length-1;

        while(backIndex >= 0 && insert < sorted[backIndex]) {
            sorted[backIndex+1] = sorted[backIndex]
            backIndex--;
        }
        sorted[backIndex+1] = insert;
    }

    return sorted;
}
console.log(insertionSort(arr = [2,4,6,8,1,3,5,7,9]));
/*
Pseudocode:

Copy the original array
Create an array to store the sorted values
While the array is not empty:
- make sure you have a console.log(sorted.join(',')) as your first line in the while loop
- Pop a value from the array
- Create a new spot at the end of the array with null to help with comparisons
- Walk through the sorted array in reverse order
- Check if the value to the left is smaller than the new value
- If so, you've reached the insertion point so exit the loop
- If not shift the value to the right by 1 and continue
- Insert the unsorted value at the break point
Return the sorted array
*/

function insertionSortInPlace(arr) {
    for(let i = 1; i < arr.length; i++) {
        let cur = arr[i];
       //Repeat while the unsorted half is not empty:
       for(let j = i-1; j >= 0; j--) {
        if(arr[j] > cur) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = cur;
        console.log(arr.join(','))
       }
       return arr
  }
}
      /*
    Pseudocode:

    Set a pointer dividing the array into sorted and unsorted halves
    Repeat while the unsorted half is not empty:
    - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    - Grab the first value from the unsorted half
    - For each value starting from the divider,
    - Check if the value to the left is smaller than the unsorted value
    - If so, you've reached the insertion point so exit the loop
    - If not shift the value to the right by 1 and continue
    - Insert the unsorted value at the break point
    - Increment the dividing pointer and repeat
    Return the mutated array
    */

    // Your code here
