function bubbleSort(arr) {
    //loop over the array swapping values until no more swaps
    //swap counter
    let swaps = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
            swaps++;
        }
    }
    if(swaps > 0) {
        bubbleSort(arr);
    }

    return arr;
}

// const test = [9,0,2,5,7,3,6,11]
// console.log(bubbleSort(test))

// insertionTest = [9,0,2,5,7,3,6,11]

function insertionSort(arr) {
    let i = 0;
    while(i < arr.length) {

        let j = i+1
        let currenInsertion = arr[j]
        while(j >= 0 && arr[j] < arr[j-1]) {
            arr[j] = arr[j-1]
            arr[j-1] = currenInsertion
            j--;
        }
        i++
    }
    return arr;
}

// console.log(insertionSort(insertionTest));


function selectionSort(arr /*[9,0,2]*/) {

    for(let i = 0; i < arr.length-1; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
                //swap values
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
    }

    return arr;
}


console.log(selectionSort([2,4,6,8,1,3,5,7,9]));









// function randomArray(num) {
//     let newArr = new Array(num);
//     for(let i = 0; i < num; i++) {
//         newArr[i] = Math.floor(Math.random() * num);
//     }
//     return newArr;
// }

// let array = randomArray(10000)

// console.time("bubble")
// bubbleSort(array)
// console.timeEnd("bubble")

// console.time("insertion")
// insertionSort(array)
// console.timeEnd("insertion")
