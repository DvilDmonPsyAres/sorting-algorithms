


  function mergeSort(arr) {
    if(arr.length <= 1) {
      return arr
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let rigth = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(rigth))
  }

  function merge(left, rigth) {
    const array = [];

    while(left.length && rigth.length) {
      if(left[0] < rigth[0]) {
        array.push(left.shift());
      } else {
        array.push(rigth.shift());
      }
    }

    return array.concat(left.slice()).concat(rigth.slice())
  }

  console.log(mergeSort([9,10,7,5,3,4]))



function mergeSort2(arr) {
  if(arr.length <= 1) {
    return arr
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let rigth = arr.slice(middle);

  return merge2(mergeSort2(left), mergeSort2(rigth))
}

function merge2(left, rigth) {
  const array = [];

  while(left.length && rigth.length) {
    if(left[0] < rigth[0]) {
      array.push(left.shift());
    } else {
      array.push(rigth.shift());
    }
  }

  return array.concat(left.slice()).concat(rigth.slice())
}

console.log(mergeSort2([9,10,7,5,3,4]))


function mergeSortAgain(array) {
  //return 1 length array
  if(array.length <= 1) {
    return array;
  }
  // divide to half the arrays
  let left = array.slice(0, Math.floor(array.length / 2));
  let rigth = array.slice(Math.floor(array.length/2));

  // console.log(left, rigth)

  function merge(arr1, arr2) {
    let result = [];

    while(arr1.length && arr2.length) {
      if(arr1[0] < arr2[0]) {
        result.push(arr1.shift())
      } else {
        result.push(arr2.shift());
      }
    }


    return result.concat(arr1.slice()).concat(arr2.slice())
  }


  // return the result of merging  2 halfs
  return merge(mergeSortAgain(left), mergeSortAgain(rigth))
}

console.log(mergeSortAgain([5,4,3,2,1]))
