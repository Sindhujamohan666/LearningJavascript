//Searching

let results = ["pass", "fail", "pass", "error", "fail"];
//// indexOf — returns first index, or -1 if not found
console.log(results.indexOf("pass")); //0
console.log(results.indexOf("skip")); //returns -1 (Not found)

//lastindexOf — searches from the end of the array
console.log(results.lastIndexOf ("fail")); //4

// includes — returns boolean (similar to contains in java)
console.log(results.includes("error")); //true
console.log(results.includes("skip")); //false

// find — returns first matching element
let nums = [10, 25, 30, 45];
console.log(nums.find(x=>x>20)); //25

// findIndex
console.log(nums.findIndex(x=>x>20)); //1

console.log(nums.findLast(n => n > 20)); // 45] 
console.log(nums.findLastIndex(n => n > 20));// 3