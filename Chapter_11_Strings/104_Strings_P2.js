// Extracting Substrings

let str="Login_Test_Pass_001";
// slice(start, end) — negative indexes supported
console.log(str.slice(0,5)); //Login
console.log(str.slice(11)); //Pass_001

// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6, 10));  // "Test" (prints from index 6 to 9(end-1))

// at() for single chars
console.log(str.at(0)); //L
console.log(str.at(-1)); //1 (last character)