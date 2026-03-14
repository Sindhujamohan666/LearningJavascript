// ==, ===, = 

let a=5;

console.log(a=5); // Output: 5 (assignment operator, assigns the value 5 to variable a and returns the assigned value)
console.log(a==5); // Output: true (loose equality, checks value only)
console.log(a===5); // Output: true (strict equality, checks value and type)

console.log(a=="5"); // Output: true (loose equality, checks value only)
console.log(a==="5"); // Output: false (strict equality, checks value and type)

console.log(null==undefined); //special rule-they only equal each other.
console.log(null===undefined); // Output: false (strict equality, checks value and type)

console.log(5==5.0); // Output: true (loose equality, checks value only)--both are numbers
console.log(5===5.0); // Output: true (strict equality, checks value and type)--both are numbers
console.log(5==5.01); // Output: false (loose equality, checks value only)
console.log(5===5.01); // Output: false (strict equality, checks value and type)