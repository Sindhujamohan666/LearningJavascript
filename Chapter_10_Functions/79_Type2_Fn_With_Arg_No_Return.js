// Type 2 Functions
// Function with argument/parameter but no return value.
function greetByName(name){
    console.log("Hello " + name);
}
greetByName("Sindhu"); // Output: Hello Sindhu
greetByName("Mohan"); // Output: Hello Mohan

let name1 = greetByName("Sumit"); //Hello Sumit
console.log(name1); // Output: undefined (because the function does not return anything we cant print variable name1)

function Beggar(money){
    console.log("Thanks "+money);
}
let returnsomething=Beggar(100); // Output: Thanks100
console.log(returnsomething); // Output: undefined (because the function does not return anything we cant print variable returnsomething)

