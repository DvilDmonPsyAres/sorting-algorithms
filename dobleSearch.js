function doubleSpeedSum(arr) {
  let left = arr.slice(0, Math.floor(arr.length / 2));
  let rigth = arr.slice(Math.floor(arr.length / 2));
    let sum = 0;
    if(rigth.length > left.length) {
        sum+=rigth[rigth.length-1];
        for(let i = 0; i < left.length; i++) {
            sum+= left[i] + rigth[i]
        }
        return sum;
    } else {
        for(let i = 0; i < left.length; i++) {
            sum+= left[i] + rigth[i]
        }
        return sum;
    }

}

console.log(doubleSpeedSum([1,2,3,4,5]));
console.log(doubleSpeedSum([1,2,3,4,5,0]));
