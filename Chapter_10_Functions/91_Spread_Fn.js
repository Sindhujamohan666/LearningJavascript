function add(a,b,c){
    return a+b+c;
}

//Add using ...(spread ) fn
let num=[1,2,3];
let sum=add(...num); //This is similar to above
console.log(sum);

function haserror(...codes){
    return codes.some(c=>c>=400);
}
let responsecodes=[200,201,204];
console.log(haserror(...responsecodes));  // false