//String Conversion

//To String
(200).toString() // "200"
true.toString() // "true"
//null.toString() // TypeError: Cannot read properties of null (reading 'toString')
//undefined.toString() // TypeError: Cannot read properties of undefined (reading 'toString')

Number("42") // 42

parseInt("42px") // 42 
parseFloat("3.14abc") // 3.14

let str="hello";
str[0] // "H"
console.log(str); // hello-Strings are immutable, so str[0] = "h" will not change the string
console.log(str);

let upper=str.toUpperCase(); // "HELLO"
console.log(str); // hello
console.log(upper); // [Function: toUpperCase] - This is a reference to the function, not the result of calling it