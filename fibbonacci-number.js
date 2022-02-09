var fib = function(n) {
    
    //     if(n==0){
    //         return 0;
    //     }
    //     else if(n==1){
    //         return 1;
    //     }
        
    //     return fib(n-1) + fib(n-2);
        
        if(n==0 || n==1){
            return n;
        }
        
        let first_previous = 0;
        let second_previous = 1;
        let fibonacci;
        for(let i = 1;i < n;i++){
            fibonacci = first_previous + second_previous;
            first_previous = second_previous;
            second_previous = fibonacci;
        }
        return fibonacci; 
    };