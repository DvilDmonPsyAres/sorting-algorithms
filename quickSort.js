


function quickSort(arr) {

    if(arr.length == 0) return [];
    if(arr.length == 1) return arr;

    let i = Math.floor(arr.length / 2);
    let pivot = arr[i]
    arr.splice(i, 1);


    return [
      ...quickSort(arr.filter(y => y < pivot)),
      pivot,
      ...quickSort(arr.filter(y => y >= pivot)),
    ]
  }

  console.log(quickSort([9,8,7,6,5,4,3]))


  function quickSort(arr) {

    if(arr.length <= 1) {
      return arr;
    }


    let pivot = arr[arr.length - 1];
    let left = [];
    let rigth = [];

    for(let i = 0; i < arr.length -1; i++) {
      if(arr[i] < pivot) {
        left.push(arr[i])
      } else {
        rigth.push(arr[i])
      }
    }

      // if(left.length > 0 && rigth.length > 0) {
        return [...quickSort(left), pivot, ...quickSort(rigth)]
      // } else if (left.length > 0) {
      //   return [...quickSort(left), pivot]
      // } else {
      //   return [pivot, ...quickSort(rigth)]
      // }

  }



  console.log(quickSort([5,4,1,3,2]))
