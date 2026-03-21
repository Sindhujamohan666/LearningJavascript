const { SourceTextModule } = require("node:vm");

let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser);
console.log(browser.length);

browser.pop();
console.log(browser); //pops edge
console.log("------------ TTA --------");

let removed = browser.shift(); //shift removes the first element of the array -chrome
console.log(browser);
console.log(removed); //chrome removed

console.log("------------ TTA --------");
for(let i=0; i<browser.length; i++){
    console.log(browser[i]);
    if(browser[i] === "opera"){
        console.log("Opera is removed from the selenium!");
    }
}