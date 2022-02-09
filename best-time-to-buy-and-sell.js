var maxProfit = function(prices) {
    
    let maxSum = 0;
    let currentElement = prices[0];
    
    for(let i = 1;i < prices.length;i++){
        let currentSum = prices[i] - currentElement;
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
        if(currentSum < 0){
            currentElement = prices[i];
        }
        
    }
    return maxSum;
};

