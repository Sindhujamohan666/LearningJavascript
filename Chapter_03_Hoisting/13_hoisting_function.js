// Step 1 - Defination of functions
function getUserStatus(){
    console.log(status_code); // Output: undefined due to hoisting
    var status_code="Active";
    console.log(status_code); // Output: Active
}

// Step 2 - Calling of the functions
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.