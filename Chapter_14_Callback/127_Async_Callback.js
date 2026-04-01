console.log("Test1: Started");
setTimeout(function(){ //This is an inbuilt function in JS
    console.log("Test 2 : API response received!");
}, 2000); //Test2 prints after 2 seconds, simulating an API response delay

console.log("Test 3: Moving to next last");

/* Output:
Test1: Started
Test 3: Moving to next last
Test 2 : API response received!  <--- prints after 2 seconds
*/