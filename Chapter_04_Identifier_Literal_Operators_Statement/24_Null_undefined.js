console.log(null==undefined); // Output: true (null and undefined are considered equal in loose equality)
console.log(null===undefined); // Output: false (null and undefined are not the same type, so they are not strictly equal)

console.log(null == 0); // Output: false (null is only loosely equal to undefined, not to any other value)
console.log(null==""); // Output: false (null is not loosely equal to an empty string)
console.log(undefined == 0); // Output: false (undefined is not loosely equal to any value except null)
console.log(undefined==""); // Output: false (undefined is not loosely equal to an empty string)