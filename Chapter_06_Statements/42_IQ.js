if ([]) {
    console.log("True!") //true
}
// case 1
let response;
if (response) { //This fails on 0,"",and false which might be legitimate API values.

}
// case 2
if (response !== null) { //This catches both "null"and "undefined" but allows 0,"",and false which might be legitimate API values.

}



if (true) {

}
else if (false) {

}
// else{

// }