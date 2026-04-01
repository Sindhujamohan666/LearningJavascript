// Searching & Checking

let url="https://staging.vwo.com/api/login?retry=true";
//includes()
console.log(url.includes("staging")); //true
console.log(url.includes("production")); //false

//startsWith()/endsWith()
console.log(url.startsWith("https")); //true
console.log(url.startsWith("http://")); //false
console.log(url.endsWith("true")); //true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));//index of first occurrence of "a" starts from 0
console.log(url.lastIndexOf("a"));//index of last occurrence of "a" starts from 0
console.log(url.indexOf("nothere"));//if the string is not found, it returns -1

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); // regex
url.search(/\d+/); // regex to search for digits, returns index of first digit