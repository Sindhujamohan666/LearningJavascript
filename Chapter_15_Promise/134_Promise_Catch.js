let apicall=new Promise(function(resolve,reject){
    reject("50 Error");
});
apicall.then(function(data){
    console.log("Data is success");
}).catch(function(error){
    console.log("Error"); //as promise is rejected, it will run catch block and print "Error"
})
// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped when promise is rejected.
  