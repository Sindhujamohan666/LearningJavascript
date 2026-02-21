var a="Sindhuja"; //Global variable, can be accessed anywhere in the code.
if(true){
    console.log(a); //output- "Sindhuja" because var is function-scoped and is
    //  hoisted to the top of its scope. The variable 'a' is accessible 
    // within the if block.
    var a="temp";
     //once local variable 'a' is declared and initialized
    // with "temp", it will shadow the global variable 'a' within the if block.
    //  So, this will print "temp".

    console.log(a); //output-temp
}