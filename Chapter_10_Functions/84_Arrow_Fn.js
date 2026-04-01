//Arrow Function (ES6)
const greet = function (name1) {
    return `Hello, ${name1}!`;
}
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
const greet1 = (name1) => `Hello, ${name1}!`;
console.log(greet1("Sindhu")); // Output: Hello, Bob!
console.log(greet1("Sumathy")); // Output: Hello, Bob!

// arrow functions only generally works whenever you have a single line. 
const doubleit=n=> n*2;
console.log(doubleit(5)); // Output: 10

// No params — parens required
const getEnv=()=>"Staging";
console.log(getEnv()); // Output: Staging

// Suppose we have a multi-line. Can we use arrow function everywhere? 
// Multi-line — needs curly braces + return
const getResult=(score)=>{
    if(score>=70) return "Pass";
    return "Fail";
};