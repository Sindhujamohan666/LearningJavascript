console.log(username); //Cannot access 'username' before initialization
console.log("I am awesome");  
console.log("I am awesome"); 
console.log("I am awesome"); 
console.log("I am awesome"); 

let username="Sindhu";

// Note: let and const are block-scoped, so they are not hoisted to the top of their scope like var. 
// They are hoisted to the top of their block but are not initialized until their declaration is evaluated. 
// This means that if you try to access a let or const variable before its declaration, it will throw a ReferenceError.

console.log(username);