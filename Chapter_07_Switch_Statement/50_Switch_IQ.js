let x = 10;
switch (x) {
    //block 1 printed
    case 10:
        let b1 = 1; //duplicate case but it will not give you error because of the usage of let and it will be block scope.
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");
    // default:
    //     console.log("d");

}

//IT will allow you to have the duplicate case with first as the usage. 
