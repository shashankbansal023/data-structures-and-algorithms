var plusOne = function(digits) {

    for(let i = digits.length-1;i>=0;i--){
  
      if(digits[i] + 1 < 10){
          digits[i] = digits[i] + 1;
          break;
      }
  
      digits[i] = 0;
      if(i===0) return [1,...digits];
    }
    return digits;
  };

  