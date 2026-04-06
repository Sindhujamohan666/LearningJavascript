/*async function sayHello(){
    return "Hello,QA!";
}

sayHello().then(function (msg) {
    console.log(msg);
});
//Output: Hello,QA!  */
//------------------------------

/*async function getStatus() {
    let status=await Promise.resolve("QA is the best!");
    console.log("Status code:"+status);
}
getStatus();
*/
//Output: Status code:QA is the best!
//--------------------------------
/*
async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

     let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

     let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);
}
testFlow();
*/
/* Output:
Opened browser
Clicked login
Verified Dashboard */

//--------------------------
/*async function apiTest() {
    try {
        let response = await Promise.resolve({ status: 201, body: "Created" });
        console.log("Status:", response.status);
     console.log("Body:", response.body);
 } catch (err) {
    console.log("Error:", err);
 } finally {
     console.log("Test complete");

    }
}
apiTest();*/
/* Output:
Status: 201
Body: Created
Test complete */

//-----------------------------
/*console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve(); //waits 
    console.log("C");
}
test();
console.log("D");*/
/* Output:
A B D C   */  
//---------------------------------
/*async function runAll() {
    let [a, b, c] = await Promise.all([
        Promise.resolve("Logi OK"),
        Promise.resolve("Chart OK"),
        Promise.resolve("CheckoutOK")
    ]);
    console.log(a);
    console.log(b);
    console.log(c);
}
runAll(); */
/* Output:
Logi OK
Chart OK
CheckoutOK
*/  
//---------------------------------
/*async function healthCheck() {
        let results = await Promise.allSettled([
         Promise.resolve("Auth: UP"),
        Promise.reject("DB: DOWN"),
       Promise.resolve("Cache: UP")
    ]);

       results.forEach(function (r) {
       let status = r.status === "fulfilled" ? "✅" : "❌";
       let msg = r.value || r.reason;
    console.log(status + " " + msg);
  }); }
 healthCheck(); */
/* Output:
✅ Auth: UP
❌ DB: DOWN
✅ Cache: UP
*/  

//-----------------------------
/*async function checkEndpoints() {
     let endpoints = ["/login", "/users", "/orders"];
     for (let i = 0; i < endpoints.length; i++) {
         let result = await Promise.resolve(endpoints[i] + " → 200");
          console.log(result);
          }
          console.log("All checks done");
          }
checkEndpoints(); */
/*/login → 200
/users → 200
/orders → 200
All checks done*/

//------------------------------------
// Async IIFE(Immediately Invoked)
/* async function add(a, b) {
    return a + b;
}
async function main() {
    let result = await add(10, 20);
    console.log("Sum:", result);

    let result2 = await add(result, 30);
    console.log("Total:", result2);
}

main(); */
/* Output:
Sum: 30 
Total: 60 */
