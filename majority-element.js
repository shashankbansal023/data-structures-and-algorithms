//it can be implemented using BST.
//it can be implemented using nested for loops;

//moore's voting algorithm

var majorityElement = function(nums) {
    //moore voting algorithm
    let count = 0;
    let candidate = 0;
    
    for(let i = 0;i < nums.length;i++){
        if(count == 0){
            candidate = nums[i];
        }    
        if(candidate == nums[i]){
            count ++;
        }
        else{
            count --;
        }
    }
    return candidate;
};