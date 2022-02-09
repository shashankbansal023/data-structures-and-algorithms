var longestCommonPrefix = function(strs) {
    
    let commonString = "";
    let flag = true;
    
    for(let i = 0;i < strs[0].length;i++){
        
        for(let j = 0;j < strs.length-1;j++){        
            
            if(strs[j][i]!== strs[j+1][i]){
                flag = false;
                break;
            }
            
        }
        if(flag == false) return commonString;
        commonString+= strs[0][i];
        
    }
    
    return commonString;
    
};

