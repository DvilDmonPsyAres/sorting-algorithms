var removeDuplicates = function(nums) {
    let numsIndex = new Set();
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(!numsIndex.has(nums[i])) {
            numsIndex.add(nums[i]);
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};


var removeDuplicatesDouble = function(nums) {
    let numsIndex1st = new Set();
    let numsIndex2nd = new Set();
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(numsIndex1st.has(nums[i]) && !numsIndex2nd.has(nums[i])) {
            numsIndex2nd.add(nums[i])
            nums[index] = nums[i];
            index++;
        }

        if(!numsIndex1st.has(nums[i]) && !numsIndex2nd.has(nums[i])) {
            numsIndex1st.add(nums[i])
            nums[index] = nums[i];
            index++;
        }

    }
    return index;
};
