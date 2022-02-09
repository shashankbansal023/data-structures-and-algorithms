
var MinStack = function() {
    this.items = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.items.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.items[0];
    for(let i = 1;i < this.items.length;i++){
        if(min > this.items[i]){
            min = this.items[i];
        }
    }
    return min;
};
