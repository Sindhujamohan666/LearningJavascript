//This is not a hot code, it will not be optimized by V8 .
console.log("Hello");

//This is a hot code, it will be optimized by V8 after being called 10000 times.
function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);