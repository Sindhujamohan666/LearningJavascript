// if (ourStatusCode >= 200 && ourStatusCode < 300) 
//Normal function
function getStatuscode(status){
    if(status>=200 && status<=300){
        console.log("Request is fine!");
    }
}

//Function Expression -Assigning function to a variable
const validatestatuscodeExp=function(status){
    if(status>=200 && status<=300){
        console.log("Request is fine!");
    }
}
//Arrow function
const validatestatuscode_Arrow=(status)=>{
    if(status>=200 && status<=300){
        console.log("Request is fine!");
    }
}
getStatuscode(200);
validatestatuscodeExp(200);
validatestatuscode_Arrow(200);
