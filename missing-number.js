var missingNumber = function(nums) {
    //     let map = new Map();
        
    //     for(let i = 0;i < nums.length;i++){
    //         map.set(nums[i], true);
    //     }
        
    //     for(let i = 0;i <= nums.length;i++){
    //         if(!map.get(i)){
    //             return i;
    //         }
    //     }
        
        let expected = [...Array(nums.length).keys(),nums.length];
    
        let array = [...expected, ...nums];
        let xor = 0;
        
        for(let num of array){
            xor = xor^num;
        }
        return xor;
    };
    