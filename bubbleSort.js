let arr = [9,8,7,6,5,4,3,2,1];

function bubbleSort(arr)  {
    let i = 0;
    let counter = 0;
    while(i < arr.length-1) {
        if(arr[i]>arr[i+1]){
            let temp = arr[i+1]
            arr[i+1] = arr[i];
            arr[i] = temp;
            counter++;
        }
        i++;
    }
    if(counter > 0) {
        bubbleSort(arr)
    }
    return arr;
}

console.log(bubbleSort(arr));
