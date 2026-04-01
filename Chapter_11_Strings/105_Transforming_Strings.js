//Transforming Strings

let str="Hello,World!";
console.log(str.toUpperCase()); //HELLO,WORLD!
console.log(str.toLowerCase()); //hello,world!

//Trim whitespace
console.log(str.trim()); // Trims whitespaces from both ends of the string

str.trimStart(); // Trims whitespaces from the start of the string
str.trimEnd(); // Trims whitespaces from the end of the string

//Replace
let msg="Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // Replaces only the first occurrence of "FAIL"
console.log(msg.replaceAll("FAIL", "PASS")); // Replaces all occurrences of "FAIL"
msg.replace(/FAIL/g, "PASS"); // replace all with Regex

// Concatenation
console.log("Hello" + " " + "World!"); // "Hello World!"
console.log("Hello".concat(" ", "World!")); // "Hello World!"
console.log(`${"Hello"} ${"World"}!`); // Template literals for concatenation

let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));// Replaces all occurrences of "app" with "qa" using regex with global flag

// Splitting & Joining
console.log("pass,fail,skip".split(",")); // ["pass", "fail", "skip"]
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]
console.log("test_login_pass".split("_").join(" ")); // "test login pass"

// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date=parts.join("-"); // "2024-03-07"   
console.log(date);