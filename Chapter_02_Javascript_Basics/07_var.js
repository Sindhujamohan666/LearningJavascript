//var is function-scoped.

var a=10;  //Global variable
console.log(a); 

//Defining a function to demonstrate function scope of var
function printHello(){
    console.log("Hello,Sindhuja!");
    var a=20;  //Local variable
    console.log(a);
    if(true){ //This block a=30 will be printed even outside the block because var is not block-scoped
        var a=30;  //Same variable as above, not block-scoped
        console.log(a);
    }
    console.log("F-->",a);  //Will print 30, not 20, because var is function-scoped
}
printHello(); //Calling the function to see the output