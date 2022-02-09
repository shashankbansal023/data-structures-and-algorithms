class Stack{
    constructor(){
        this.items = [];
    }
    pop(){
       this.items.pop();
        return this;
    }
    push(value){
        this.items.push(value);
        return this;
    }
    
    top(){
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
        if(!this.items.length) return true;
        else return false;
    }
}

var isValid = function(s) {
    
    let stack = new Stack();
    for(let i = 0;i < s.length;i++){
        if(s[i]=="(" || s[i]=='[' || s[i]=='{'){
            stack.push(s[i]);
        }
        else if(s[i]==')' && stack.top()=='('){
            stack.pop();
        }
        else if(s[i]==']' && stack.top()=="["){
            stack.pop();
        }
        else if(s[i]=='}' && stack.top()=='{'){
            stack.pop();
        }
        else{
            return false;
        }
    }
    if(stack.isEmpty()) return true;
    return false;
    
};