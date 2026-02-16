//let -Block scoped
let b=20; //Global variable
console.log(b);

//Defining a function to demonstrate block scope of let
function printHello(){
    console.log("Hello,Sindhuja!");
    let b=30; //Local variable
    console.log(b);
    if(true){
        let b=5;
        console.log(b); //Will print 5, not 30, because let is block-scoped
    }
     console.log("let ->",b); //Will print 30, not 5, because let is block-scoped and the block variable does not affect the function variable
}
printHello(); //Calling the function to see the output

// let does NOT allow re-declaration in the same scope
// let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
// let a = 10;
let a = 10;
a = 20;
console.log(a); // 20-->redefined value of a.

// var nn = "Pramod";
// let nn = "Pramod";   // Error: Identifier 'nn' has already been declared
