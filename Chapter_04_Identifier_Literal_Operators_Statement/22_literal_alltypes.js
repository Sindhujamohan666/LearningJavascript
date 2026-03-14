let count=42; // This is a numeric literal assigned to the variable 'count'.
let negative=-100; // This is a numeric literal with a negative value assigned to the variable 'negative'.
let Zero=0; // This is a numeric literal with the value zero assigned to the variable 'Zero'.


let h=0xFF; // This is a hexadecimal numeric literal assigned to the variable 'h'. It represents the decimal value 255.
let color_hex="#FF5733"; // This is a numeric literal representing a hexadecimal color code assigned to the variable 'color_hex'.
console.log(color_hex); // Output: #FF5733

let octal = 0o77;
let pi = 3.14159;

let million = 1e6;
let tiny = 1.5e-4;

// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"'; //It contains double quotes inside single quotes, so it's valid.

// Double quotes
let double = "Hello World";
let withSingle = "It's a nice day"; //It contains a single quote inside double quotes, so it's valid.

//Template literals --written inside backticks (``)--symbol used for string interpolation and multi-line strings.
let firstName = "Sindhuja";
let fullName=`My name is ${firstName} Mohanasundaram`; // This is a template literal that allows for string interpolation using ${} syntax.`;
console.log(fullName); // Output: My name is Sindhuja Mohanasundaram

let math=`2+2=${2+2}`; // This is a template literal that includes an expression ${2+2} which will be evaluated and included in the resulting string.
console.log(math); // Output: 2+2=4

//Storing file paths
let filePath="C:\\Users\\WELCOME\\Documents\\file.txt"; 
// Single slash is not allowed. We have to use double slash. 
console.log(filePath); // Output: C:\Users\WELCOME\Documents\file.txt

// ---> // - URLs
// ---> \\ - Path

let address="https://app.vwo.com/#login";
console.log(address); // Output: https://app.vwo.com/#login

// String literal edge cases
let empty="" // empty string (falsy!)
let space = " "; // single space (truthy!)
let zero1 = "0"; // string zero (truthy!)

let isLoggedIn = true;
let hasPermission = false;