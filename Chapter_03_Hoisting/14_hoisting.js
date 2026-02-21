console.log(a); //If var a is not yet defined below ,it shows a is not defined.
console.log("Sindhu");
console.log("Sindhu");
console.log("Sindhu");
console.log("Sindhu");
console.log("Sindhu");

//The moment we declare a variable using var, it is hoisted to the top
//  of its scope and initialized with undefined. So, when we try to 
// access it before the declaration, it will return undefined 
// instead of throwing an error.
var a="abc";