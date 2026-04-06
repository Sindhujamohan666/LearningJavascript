import { BASE_URL, formatUpperCaseString } from "../testutil.js";

console.log(BASE_URL);
// console.log(fname);--> This will give an error because fname is not exported from testutil.js
let result = formatUpperCaseString("Pramod");
console.log(result);