//fibbonacci method applicable

var climbStairs = function(n) {
    let j = 0;
    let numSteps = 0;
    while(n >=j){
        numSteps+= factorial(n)/(factorial(j)*factorial(n-j));
        n--;
        j++;                         
    }
    return numSteps;
};

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    
    return n* factorial(n-1);
}