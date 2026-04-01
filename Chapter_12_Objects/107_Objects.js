// Objects
// Key and value pairs

let student1={name:"Amit",age:65};
let student2={name:"Pramod"};
let student3={name:"Pramd",age:55,phone:"1234567890"};

// Key will not be in the double quotes for an object
// below key in doubt is actually JSON
let JSON_Student4={"name":"Pramod","age":55,"phone":"1234567890"};

//----------
let a={status:"pass"};
console.log(a.status); // pass
console.log(a["status"]); // pass

let b=a; // b copies the REFERENCE, not the object
b.status    = "fail"; // Modifying b also modifies a, because they reference the same object
console.log(a.status); // fail
console.log(b.status); // fail

//Two separate object-different memory
let c={status:"pass"};
let d={status:"pass"};
console.log(c==d); // false(different memory) =`= compares the reference, not the content
console.log(c.status==d.status); // true (compares the content of the status property)

//json
const t_json={
    "name":"Alice",
    "age":10
};
console.log(t_json); // { name: 'Alice', age: 10 }

const t_js={
    name:"Alice",
    age:10
};
console.log(t_js); // { name: 'Alice', age: 10  }
