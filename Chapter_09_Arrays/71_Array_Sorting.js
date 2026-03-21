//Sorting => alphabetical by default 

let fruits=["banana","apple","grape","orange"];
fruits.sort();
console.log(fruits); //[ 'apple', 'banana', 'grape', 'orange' ]

let nums=[10,1,21,2];
nums.sort();
console.log(nums); //[ 1, 2, 10, 21 ] => sorts as strings  
//checks first character of each number and sorts accordingly [ 1, 10, 2, 21 ]

nums.sort((a,b)=>a-b); //ascending
console.log(nums); //[ 1, 2, 10, 21 ]

nums.sort((a,b)=>b-a); //descending
console.log(nums); //[ 21, 10, 2, 1 ]