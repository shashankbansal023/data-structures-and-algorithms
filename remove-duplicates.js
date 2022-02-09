var removeDuplicates = function(nums) {
    
    let j = 0;
    for(let i = 1;i < nums.length;i++){
        if(nums[j]!=nums[i]){
            nums[j+1] = nums[i];
            j++;
        }
    }
    nums.splice(j+1,nums.length)
    return nums.length;
};

