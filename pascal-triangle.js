var generate = function(numRows) {
    if(numRows==1){
        return [[1]];
    }
    
    let result = [[1],[1,1]];
    for(let i = 3;i <= numRows;i++){
        
        let arr = [...result[result.length-1]];
        let newArr = [1,1];
        
        for(let i =0;i < arr.length-1;i++){
            sum = arr[i] + arr[i+1];
            newArr.splice(1,0,sum);
        }
        result.push(newArr);
    }
    
    return result;
      
};

