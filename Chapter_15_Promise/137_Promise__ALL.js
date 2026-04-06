let checkAuth=Promise.resolve("Auth OK");
let checkDB=Promise.resolve("DB OK");
let checkCache=Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
}) //This prints all because all the promises are resolved


//The below code will print "Failed: DB DOWN" because one of the promises is rejected. The .catch() method will catch the first rejection and print the error message.  
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });