function greet(name) {
    return `Hello, ${name}!`;
}

greet("Alice"); //no output because we are not printing the return value of the function
console.log(greet("Bob")); // Output: Hello, Bob! (because the function returns a greeting message we can print it)