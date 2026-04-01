const user={
    name:"PrJohnamod",
    age:43
}

const calculator={
    value:0,
    add(n){
        this.value+=n;
        return this; // Return the calculator object for chaining
    },
    subtract(n){
        this.value-=n;
        return this; // Return the calculator object for chaining
     }
    }
console.log(calculator.add(5).subtract(6));
//{ value: -1, add: [Function: add], subtract: [Function: subtract] }