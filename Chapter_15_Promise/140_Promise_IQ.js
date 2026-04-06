/*let p=new Promise(function(resolve,reject){
     resolve(42);
    });
    p.then(function(value){
        console.log("Answer",value);
    }); //o/p-42
    */
   //----------------
  
  /* let p=new Promise(function(resolve,reject){
    reject("Something broke");
   });
   p.catch(function(err){
    console.log("Caught",err);  
   }); //o/p-Caught Something broke
   */
  //----------------
  /*let p=Promise.resolve(5);
  p.then(function(val){
     return val*10;
  }).then(function(val){
    console.log("Result:"+val);
  });//o/p-Result:50
  */
// ------.----------------

/*Promise.resolve(1)
.then(function(val){
    console.log(val);
    return val+1;
}).then(function(val){
    console.log(val);
    return val+1;
}).then(function(val){
    console.log(val);
});
//o/p-1 2 3
*/
//----------------
//Since error is thrown in the first then() block, the second then() block will not execute and the control will jump to the catch() block to handle the error.

/*Promise.resolve("start")
.then(function(val){
    console.log(val);
    throw new Error ("Broke at Step2")
}).then(function(){
    console.log("This will not run");
}).catch(function(err){
    console.log("Caught",err.message);
});
//o/p-start Caught Broke at Step2
*/

//-----------------
/*Promise.reject("Test failed")
.then(function(data){
    console.log("Data:",data);
})
.catch(function(err){
    console.log("Caught",err);
})
.finally(function(){
    console.log("cleanup completed");
});  
//o/p-Caught Test failed cleanup completed
*/

//----------------------------
 /* Promise.resolve("Quick win").then(function(msg){
    console.log(msg);
    });

  Promise.reject("Quick loss").catch(function(err){
    console.log(err);
    });
o/p-Quick win Quick loss*/

//------------------------------------
 
 /* let t1 = Promise.resolve("Login: PASS");
 let t2 = Promise.resolve("Search: PASS");
 let t3 = Promise.resolve("Logout: PASS");
 
 Promise.all([t1, t2, t3]).then(function (results) {
 console.log(results);
 });
 [ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ] */

 //----------------------------------
 
/*let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL"); //one promise is rejected, so the whole Promise.all() will reject
let t3 = Promise.resolve("PASS");

Promise.all([t1, t2, t3])
 .then(function (r) { console.log("All:", r); })
  .catch(function (err) { console.log("Stopped:", err); });
//o/p-Stopped: FAIL
*/

//---------------------------
/* settled prints all values inspite of rejection like soft Assertion
Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});
//o/p-fulfilled → API 200 rejected → API 500 fulfilled → API 201
*/