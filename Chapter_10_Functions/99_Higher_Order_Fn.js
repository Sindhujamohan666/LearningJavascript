// Higher-Order Functions

// A function that takes a function as argument or returns a function.
function runWithLogging(testfunc,testName){
    console.log(`Starting: ${testName}`);
    let result=testfunc();
    console.log(`Finished: ${testName}=>: ${result}`);
    return result;
}
function loginTest(){
    return "pass";
}
function loginTestFailed(){
    return "fail";
}
runWithLogging(loginTest,"Login Test");
runWithLogging(loginTestFailed,"Dashboard Test Failed");