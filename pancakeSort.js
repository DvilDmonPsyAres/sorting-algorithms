function panCakeSort(arr){
    let arr1 = arr.slice()
    let arr2 = arr.slice()
    if(arr1.sort((a,b) => {return a - b }).join("") === arr2.join("")) {
        return [];
    }

    for(let i = arr.length - 1; i >= 1; --i) {
        let maxIndex = 0;
        let max = arr[0];

        for(let j = 1; j <= i; ++j) {
            if(arr[j] > max) {
                max = arr[j];
                maxIndex = j;
            }
        }

        if(maxIndex === i) {
            continue;
        }

        let pointer;

        if(maxIndex > 0) {
            pointer = arr.slice(0, maxIndex + 1).reverse();

            for(let j = 0; j <= maxIndex; j++) {
                arr[j] = pointer[j];
            }
        }

        pointer = arr.slice(0, i + 1).reverse();
        for(let j = 0; j <= i; j++) {
            arr[j] = pointer[j];
        }
    }

    return arr;
}

console.log(panCakeSort([1,2,3]))
