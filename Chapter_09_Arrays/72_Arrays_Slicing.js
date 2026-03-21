// Slicing & Combining

let arr=[1,2,3,4,5];
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 
console.log(arr.slice(1,3)); //[ 2, 3 ] => from index 1 to index 2 (end-1)
console.log(arr.slice(2,4)); //[ 3, 4 ] => from index 2 to index 3 (end-1)
console.log(arr.slice(2,5)); //[ 3, 4, 5 ] => from index 2 to index 4 (end-1)
console.log(arr.slice(2)); //[ 3, 4, 5 ] => from index 2 to end of the array
console.log(arr.slice(-2)); //[ 4, 5 ] => from index -2 to end of the array
console.log(arr.slice(-3));//[ 3, 4, 5 ] => from index -3 to end of the array
console.log(arr.slice(0)); //[ 1, 2, 3, 4, 5 ] => from index 0 to end of the array
console.log(arr.slice(-5)); //[ 1, 2, 3, 4, 5 ] => from index -5 to end of the array

let a=[1,2];
let b=[3,4];
let c=a.concat(b); // [ 1, 2, 3, 4 ] => combines a and b into a new array
console.log(c); // [ 1, 2, 3, 4 ]

let d=a.concat(b,[5,6]); // [ 1, 2, 3, 4, 5, 6 ] => combines a, b and [5,6] into a new array
console.log(d); // [ 1, 2, 3, 4, 5, 6 ]

// spread (modern way) - concatenation. (...)
let e=[...a,...b];
console.log(e); //[ 1, 2, 3, 4 ] => combines a and b into a new array

// ... , ===
// Join 
let s=["pass","fail","skip"].join("||"); //pass||fail||skip
console.log(s);

let s1=["pass","fail","skip"].join(","); //pass,fail,skip => default separator is comma
console.log(s1);

let s2=["pass","fail","skip"].join("=");
console.log(s2);