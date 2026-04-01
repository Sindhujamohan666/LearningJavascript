const obj1={a:1,b:2};
const obj2={c:3,d:4};
/// ... Spread operator to copy and merge objects
const copy={...obj1};
console.log(copy); //{ a: 1, b: 2 }
const merged={...obj1,...obj2};
console.log(merged); //{ a: 1, b: 2, c: 3, d: 4 }

//this Keyword
const user={
    name:"John",
    saymyName(lastName){
        this.name+=lastName;
        return this.name;
    }
}
console.log(user.saymyName(" Doe")); // John Doe    
