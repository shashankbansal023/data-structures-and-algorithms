var twoSum = function(nums, target) {
    
    //     let map = new Map();
        
    //     for(let i in nums ){
    //         if(map.has(target-nums[i])){
    //             return [map.get(target-nums[i]),i]
    //         }
    //         map.set(nums[i],i)
    //     }
        
        for(let i = 0;i < nums.length;i++){
            for(let j = i+1;j < nums.length;j++){
                if(nums[i] + nums[j] === target){
                    return [i,j];
                }
            }
        }
        return [];
    };
    