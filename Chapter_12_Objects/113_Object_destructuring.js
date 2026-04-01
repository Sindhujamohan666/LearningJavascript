const user={name1: "John", age:30, city:"NYC"};

//Basic destructuring
const{name1,age}=user;
console.log(name1); // John
console.log(age); // 30

//Rename variables
const {name1:userName,city:userCity}=user;
console.log(userName); // John
console.log(userCity); // NYC

// Default values
const{country="USA"}=user;      
console.log(country); // USA (default value since country is not in user)

const data = { user: { name: "John", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;// Nested destructuring
console.log(city); // NYC