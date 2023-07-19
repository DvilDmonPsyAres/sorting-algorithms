arr =
[[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25]];

function spiralMatrix(array2d) {
    let left = 0;
    let rigth = array2d.length-1;
    let top = 0;
    let bottom = array2d.length-1;
    let direction = "rigth";
    let result = [];

    // while(left <= rigth && top <= bottom) {
        while(direction === "rigth") {
           for(let i = left ; i <= rigth; i++) {
                result.push(array2d[left][i])
            }
            rigth--;
            direction = "bottom"
        }

    // }
    return result;
}

console.log(spiralMatrix(arr))



// const spiralMatrix = arr => {
//     //initialize empty arr;
//     let res = [];
//     //set a pointers
//     let initialCol = 0;
//     let initialRow = 0;
//     let finalCol = arr[0].length;
//     let finalRow = arr.length;
//     //set direction
//     // let direction = "rigth";
//     // let counter = 0;
//     while((initialCol<finalCol) && (initialRow<finalRow)) {


//         //picking from left to right ;
//         for(let i = initialCol; i < finalCol; i++){
//             res.push(arr[initialRow][i]);
//         }
//         initialRow++
//   //pick top to down
//          for(let i = initialRow; i < finalRow; i++){
//             res.push(arr[i][finalCol-1]);
//          }
//          finalCol--;

//          if(!((initialCol<finalCol) && (initialRow<finalRow))) break;

//          for(let i = finalCol - 1; i> initialCol-1; i--){
//             res.push(arr[finalRow-1][i]);
//          }
//          finalRow--

//          for(let i = finalRow -1; i> initialRow - 1; i--){
//             res.push(arr[i][initialCol]);
//          }
//          initialCol++
// }
//  return res;
// }


// test =
// [[1,2,3,4,5],
// [6,7,8,9,10],
// [11,12,13,14,15],
// [16,17,18,19,20],
// [21,22,23,24,25]]

// //result = [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]
// console.log(spiralMatrix(test))
