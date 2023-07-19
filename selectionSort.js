
function selectionSort2(arr) {

  // Copy the original array
  let copy = arr.slice()
  // Create an array to store the sorted values
  let sorted = []
  // While the array is not empty...
  while(copy.len > 0){
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let minIndex = 0;
    for(let j = 1; j < copy.length; j++) {
      if(copy[j] < copy[minIndex]) {
        minIndex = j;
      }
    }
    // Save and remove the value at the min index
    let value = copy[minIndex]
    copy.splice(minIndex,1)
    // Add the min value to the end of the sorted array
    sorted.push(value)
  }
  return sorted;
}

console.log(selectionSort2([2,4,6,8,1,3,5,7,9]))



function selectionSort(arr) {   //[5,4,3,2,1];
    //length of the unsorted array
    const len = arr.length; //-> 6
    //loop over the array
    for (let i = 0; i < len - 1; i++) {
        //catch the index of the min value
      let minIndex = i;     //minIndex = 0
      // loop over the array searching for the min value
      for (let j = i + 1; j < len; j++) { // j+i = 1
        //compare to get min Index
        if (arr[j] < arr[minIndex]) { //arr[j] = 4 arr[minIndex] = 5
          minIndex = j; //minIndex = 4
        }
      }
      //if min index no equal to outside current loop
      if (minIndex !== i) { // 4 !== 0
        //swap current inside loop min Index
        //with outside loop current index
        const temp = arr[i];  //arr[i]= 5  //[5,4,3,2,1];
        arr[i] = arr[minIndex]; //arr[i]= 1  //[1,4,3,2,1];
        arr[minIndex] = temp; //arr[i]= 1  //[1,4,3,2,5];
      }
    }
    //return array
    return arr;
  }

  // Ejemplo de uso:
  let arr = [5,4,3,2,1];
  const sortedArr = selectionSort(arr);
  console.log(sortedArr); // Salida: [11, 12, 22, 25, 34, 64, 90]

  function selectionSortInPlace(arr) {
    // Set a pointer at zero dividing the array into sorted and unsorted halves
    let divider = 0;

    // Repeat while the unsorted half is not empty:
    while (divider < arr.length - 1) {
      // Do not move this console.log
    //   console.log(arr.join(","));

      // Find the index of the minimum value in the unsorted half
      let minIndex = divider;
      for (let i = divider + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
          minIndex = i;
        }
      }

      // Save the min value
      let minValue = arr[minIndex];

      // Shift every unsorted value to the left of the min value to the right by 1
      for (let i = minIndex; i > divider; i--) {
        arr[i] = arr[i - 1];
      }

      // Put the min value at the divider
      arr[divider] = minValue;

      // Increment the divider and repeat
      divider++;
    }

    // After sorting, the array will be in ascending order
    // console.log(arr.join(","));
    return arr;
  }
  arr=[45,62,95,12,111,45,3,1,1,44,5]
  const sortedArr2 = selectionSortInPlace(arr);
  console.log(sortedArr2);
