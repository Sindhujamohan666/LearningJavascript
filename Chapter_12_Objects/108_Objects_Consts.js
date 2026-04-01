const user={
    name:"John",
    age:30 ,    
    phone:"1234567890"
};
console.log(user); // { name: 'John', age: 30, phone: '1234567890' }

// Accessing properties
console.log(user.name); // John
console.log(user["age"]); // 30

// Dynamic property access
const key="age";// We can use a variable to access properties
console.log(user[key]); // 30

// Adding/modifying properties
user.city="New York"; // Adding a new property
user.age=31;    // Modifying an existing property
console.log(user); // { name: 'John', age: 31, phone: '1234567890', city: 'New York' }