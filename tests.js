function moveZeroes(arr) {
  let firstZero = -1;

  for(let i = 0; i < arr.length; i++) { //i=0 -> i=1 -> i=2 -> i = 3 < arr.length =4 ***end of the forloop***
    if(firstZero === -1){   //firstZero =-1 -> !!!!
      if(arr[i] === 0) firstZero = i; // arr[i=0]= 0   firstZero = 0    [0,0,2,4]
     }
    else if(arr[i] !== 0) {  //i=2 arr[2] = 2  -> i=3 arr[3] = 4
      [arr[i], arr[firstZero]] = [arr[firstZero], arr[i]]; //arr[i] = 2 arr[firstZero = 0]  [2,0,0,4] -> arr[i] = 4 arr[firstZero = 1] [2,4,0,0]

      firstZero++  //firstZero = 1 -> 2
    }
  }

  return arr;
}

console.log(moveZeroes([0,0,2,4]))
