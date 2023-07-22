function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      let mid = Math.floor((low+high) / 2);
      let pointer = arr[mid];

      if (pointer === target) {
        return mid;
      } else if (target < pointer) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  }

  console.log(binarySearch([2,3,4,6,6,7,8,9], 8));



  //TEST

  //fill and array with million integers
  let n = 1000000;
  arr = [];

  for(let i = 0; i < n; i++) {
    arr.push(i);
  }

  //Pick up thousand random values to search for, from -n to n

  valuesToSearch = [];
  for(let i = 0; i < 10000; i++) {
    valuesToSearch.push(Math.floor(Math.random() * 2 * n) - n);
  }

  startTime = Date.now();
  for(let i = 0; i < valuesToSearch.length; i++) {
    binarySearch(arr, valuesToSearch[i]);
  }
  endTime = Date.now();

  console.log(`Binary Search: ${endTime - startTime} ms`);
