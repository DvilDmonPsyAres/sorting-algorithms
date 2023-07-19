function insertionSort(arr) {
    const sorted = [arr[0]]; // Initialize sorted array with the first element of 'arr'

    for (let i = 1; i < arr.length; i++) {
        const currentInsert = arr[i];

        let j = sorted.length - 1;
        while (j >= 0 && currentInsert < sorted[j]) {
            sorted[j + 1] = sorted[j]; // Shift elements to the right
            j--;
        }

        sorted[j + 1] = currentInsert; // Insert the current element into the correct position
    }

    return sorted;
}

let arr = [9,8,7,6,5,4,3,2,1];
console.log(insertionSort(arr))
