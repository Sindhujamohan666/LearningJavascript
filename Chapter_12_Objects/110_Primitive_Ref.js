// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined
let a=10;
b=a; // b copies the VALUE, not the reference
b=99; // Modifying b does not affect a, because they are separate values
console.log(a); // 10
console.log(b); // 99
a=90; // Modifying a does not affect b
console.log(a); // 90
console.log(b); // 99

console.log("-----")
// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1={val:10};
let obj2=obj1; // obj2 copies the REFERENCE, not the value
obj2.val=99; // Modifying obj2 also modifies obj1, because they reference the same object
console.log(obj1.val); // 99
console.log(obj2.val); // 99