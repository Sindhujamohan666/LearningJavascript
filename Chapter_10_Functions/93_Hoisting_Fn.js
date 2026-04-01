// Hoisting
// Function declarations are hoisted — 
// you can call them before they're defined. 
// Function expressions and arrow functions are NOT.

greet("Bob"); // ✅ Declaration — hoisted, works before definition
function greet(name){
    console.log(`Hello ${name}`)
}

sayHi("Bob"); // ❌ TypeError: sayHi is not a function
const sayHi=function(name){
    console.log(`Hello ${name}`)
}