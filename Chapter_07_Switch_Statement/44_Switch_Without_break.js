// Switch
// 0 - Sunday, 1 - Monday, 2 - Tue.....
//Problem is as there is no break statement, so it will execute all the cases after the matched case until it finds a break or reaches the end of the switch statement. This is called "fall-through" behavior.
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday — Rest Day");
    case 1:
        console.log("Monday — Sprint Planning");
    case 2:
        console.log("Tuesday — Development");
    case 3:
        console.log("Wednesday — Code Review");
    case 4:
        console.log("Thursday — Testing");
    case 5:
        console.log("Friday — Deployment & Retro");
    case 6:
        console.log("Saturday — Rest Day");
    default:
        console.log("Invalid day value");
}