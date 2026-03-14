let amul=null;
let val=amul??"nandhini milk";
let val2=null??"default"; // "default" (?? returns right side if left is null/undefined)

// Modern JS - Typescript.
val="which milk?"+val; // "which milk?nandhini milk"(as left is null returns right side value)
console.log(val)
// very useful in test data handling.