// String Properties & Basic Access

let str="Hello World!";
//Length start from 1
console.log(str.length); //12

// Access by index
console.log(str[0]); //H
console.log(str[7]); //o
console.log(str.at(-1)); //! - last character [brackets-()]
console.log(str.at(-2)); //d - second last character [brackets-()]    
console.log(str.at(-3)); //l - third last character [brackets-()]

// charAt()
str.charAt(0); //H
// charCodeAt() — Unicode value
str.charCodeAt(0); //72 (Unicode for 'H')