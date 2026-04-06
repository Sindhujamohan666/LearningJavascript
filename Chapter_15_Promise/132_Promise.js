//Promise is an interface in Javascript
let order=new Promise(function(resolve,reject){
    let foodready=true;
    if(foodready){
        resolve("Food is delivered");
    }
    else{
        reject("Order is cancelled");
    }
})
console.log(order);
// A Promise is an OBJECT. It wraps a value that will be available later.
