// Callback

function placeOrder(item, callback) {
    console.log("Placing item");
    callback(); //function call
}

//function definition
function print(){
    console.log("Normal Fn-->Done with the order");
}
// First Way
placeOrder("Burger", print);

//Second way-Anonymous function
placeOrder("Pizza",function(){
    console.log("Anonymous Fn-->I am also a function without name");
})

//Third way-Arrow function
placeOrder("Pasta",()=>{
    console.log("Arrow Fn-->I am also a function without name");
})

console.log("------");
//Automation example
test('has title', async ({ page }) => {

});


function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});

test('has title', async ({ page }) => {

});