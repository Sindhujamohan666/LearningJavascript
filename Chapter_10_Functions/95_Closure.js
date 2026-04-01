function outer(){
    let message="Hello";
    //console.log("Outer called");

    function inner(){
        console.log("Inner called");
    }
    return inner;  //outer function call returns inner
}

let fn_inner=outer(); //outer called for outer()
fn_inner(); //fn_inner returns inner so "Inner call" printed.

//  inner() not allowed!