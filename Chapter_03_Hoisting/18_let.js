let a =10; //Global scope
console.log(a); //10
if(true){
    //Cannot access 'a' before initialization
    console.log(a); //let is block scoped,so global declaration is not accessible.
    let a=20;  //local scope
}