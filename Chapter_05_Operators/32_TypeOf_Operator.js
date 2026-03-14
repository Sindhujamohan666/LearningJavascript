console.log(typeof "Hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object -> bug in js
console.log(typeof []); // object -> array is also an object
console.log(typeof {}); // object

console.log((`${6*4}`)); //backticks -> template literals