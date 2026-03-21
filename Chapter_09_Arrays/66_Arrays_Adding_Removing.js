let arr=[1,2,3];
console.log(arr);

//Add to end
arr.push(4);
console.log(arr);

//Remove from end
arr.pop();
console.log(arr);

//pushes to end
arr.push(5,6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);
// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]
// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1); // removes 1 item at index 2 (removes 3 from array)
console.log(arr);

arr.splice(2, 0, 99); // adds 99 at index 2 deleting 0 items
console.log(arr);

arr.splice(1, 2, 10, 20); //removes index 1 and 2 values and repaces with 10 and 20
console.log(arr);