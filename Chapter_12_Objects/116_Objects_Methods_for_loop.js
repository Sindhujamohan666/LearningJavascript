const obj={a:1,b:2,c:3};

console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.values(obj));    // [ 1, 2, 3 ]
console.log(Object.entries(obj));   // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "John", age: 30 };

//for loop -Syntax1 (gives keys)
for(const key in user){
    console.log(`${key}: ${user[key]}`);
}
// Object.keys/values/entries-Syntax 2 (gives keys/values/entries)
Object.keys(user).forEach(key=>{
    console.log(key);

});

//For loop syntax 3 (gives entries)
Object.values(user).forEach(([key,value])=>{ // for entries
    console.log(`${key}: ${value}`);
});