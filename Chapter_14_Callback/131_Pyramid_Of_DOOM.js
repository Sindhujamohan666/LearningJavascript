//Pyramid of Doom is also called as Callback hell.
function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}

//Multiple call backs-Pyramid of Doom
step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!");
            });
        });
    });
});