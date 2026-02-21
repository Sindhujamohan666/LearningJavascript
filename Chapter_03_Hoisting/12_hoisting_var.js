console.log(greeting); // This will give undefined because of hoisting
var greeting = "Hello!";
console.log(greeting); // This will give "Hello!" because the variable greeting is assigned the value "Hello!" after the first console.log statement.

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"