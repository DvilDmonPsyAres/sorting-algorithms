class Sort{
    constructor(arr) {

        this.arr = arr;
    }
    merge(ln,mid,rn){
        let left = this.arr.slice(ln,mid+1);
        let right = this.arr.slice(mid+1,rn+1);

        let i = 0, j= 0, k=ln;

        while((i<left.length )&& (j<right.length)){
            if(left[i]<=right[j]){
                this.arr[k] = left[i];
                i++
            }else{
                this.arr[k]=right[j]
                j++;
            }
            k++
        }
        while(i<left.length){
            this.arr[k] = left[i];
                i++
                k++
        }
        while(j<right.length){
            this.arr[k]=right[j]
            j++;
            k++
        }

    }



    mergeSort(ln,rn){
        if(rn - ln  <= 0 ) {
            return this.arr};
        let mid = Math.floor((rn+ln)/2);
        this.mergeSort(ln,mid);
        this.mergeSort(mid+1, rn);
        this.merge(ln,mid,rn);


        return this.arr;
    }

   }


let s = new Sort([5,2,1,8,4,7,6,3]);
console.log(s.mergeSort(0, s.arr.length - 1));  // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]
