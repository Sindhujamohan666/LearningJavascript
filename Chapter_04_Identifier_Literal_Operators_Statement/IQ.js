0 == ""             // true   (both convert to 0)
0 == "0"            // true   ("0" → 0)
0 == false // true
null == undefined   // true
" \t\n " == 0   // true 

//Rule breaker (all below are false)

null == 0 // false
null == "" //false
null == false //fasle
undefined == 0 //false
undefined == "" //false
undefined == false //false
NaN == NaN  //false

console.log("" === false); //false
console.log("" == false); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 === false); // false

console.log("0" == false); //true
console.log("" == "0");  //false

let name1 = null; //This makes name not equal to undefined, but it is still falsy.Can be defined later.
let age;

name1 = "pramod";

var a=0/0; //NaN (Not a Number) is a special numeric value that represents an undefined or unrepresentable value, such as the result of dividing zero by zero. It is of type 'number' but is not equal to any other value, including itself.
var b=0.0/0.0; //NaN
console.log(b); // Output: NaN

let a2;
console.log(a2);  //undefined

let a3 = null;
console.log(a3); //null

let red = "#880808";

let inputAge = "true";
if (inputAge == false) {
    console.log("Age is empty/invalid");  // WRONG! "0" == false is true
}




