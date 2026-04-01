//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 
function name1(){
    console.log("Hi");
}
name1();
//IIFE
(function(){
    console.log("Hi");
})();

//IIFE
(function(){
    console.log("Staging");
})();

(()=>{
    console.log("Setup Complete");
})();