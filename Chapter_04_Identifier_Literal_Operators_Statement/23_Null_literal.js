// Null — "intentionally nothing"

let selectedItem=null; // This variable is explicitly assigned the value 'null', indicating that it intentionally has no value or object assigned to it.
let searchResult=null; // This variable is also assigned 'null', which can be used to represent the absence of a search result or an uninitialized state.
console.log(searchResult); // Output: null

// /// Undefined — "not yet assigned"
let declaredonly; //automatically undefined.
console.log(declaredonly); // Output: undefined

// Equality comparisons
console.log(null == undefined); // Output: true (null and undefined are considered equal in loose equality)
console.log(null === undefined); // Output: false (null and undefined are not the same type, so they are not strictly equal)