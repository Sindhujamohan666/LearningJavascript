// Strings
let url="https://app.vwo.com"; //double quotes
let status='pass'; //single quotes
let message =`Test completed in {320}ms`; //backticks for template literals

let a ="Hello";//Double quote
let b ='World';//Single quote

// Template literals (backticks) — allows expressions & multiline
let name = "Alice";
let msg=`Hello,${name}! 2+2=${2+2}`;//Hello, Alice! 2+2=4   
console.log(msg);
// Multiline

let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report);

// String() constructor (converts other types)
console.log(String(123)); // "123"  
console.log(String(true)); // "true"
console.log(String(null)); // "null"    
console.log(String(undefined)); // "undefined"
console.log(String([1,2])); // "1,2"