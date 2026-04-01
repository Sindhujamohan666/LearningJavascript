// Without functions — repeated logic
let score1=85;
let result1=score1>=70?"Passed":"Failed";
console.log(result1);

let score2=45;
let result2=score2>=70?"Passed":"Failed";
console.log(result2);

// With functions — reusable logic
function getResult(score){
    return score>=70?"Passed":"Failed";
}

getResult(85);// Returns "Passed"
getResult(45); // Returns "Failed"