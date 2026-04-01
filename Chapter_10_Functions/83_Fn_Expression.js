//Function expression -assigning function to a variable.
const greet=function(name){
    return `Hello, ${name}!`;
}

// Type 4 Function 
function greet1(name1) {
    return `Hello, ${name1}!`;
}

//Functions as Expressions
const greet2=function(name2){
    return `Hello, ${name2}!`;
}

console.log(greet1("Bob"));
console.log(greet2("Bob"));