//
function getStatuscode(code){
    if(code>=200 &&code<=300) return "success";
    if(code>=400&&code<=500) return "Client error";
    if(code>=500) return "Server error";

}
getStatuscode(200);   //This does not print anything as return statements need console.log
getStatuscode(404);  //This does not print anything as return statements need console.log
getStatuscode(500);  //This does not print anything as return statements need console.log

function logTest(name){
    console.log(`Running:${name}`);
    //no return statement
}
let result=logTest("Login");  //Running:Login
console.log(result); //No return statement cannot print variable

console.log(greet("Alice"));  //normal function hoisted
function greet(name){
    return `Hello, ${name}!`;
}

//let and const-no hoisting
//Function Expression-Not hoisted

sayHi("Bob");
const sayHi=function(name){
    return`Hi,${name}`;
};