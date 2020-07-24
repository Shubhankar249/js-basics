let runCount=0, cut;

function f() {
    runCount++;
    if (runCount>5) {
        clearInterval(cut); // to stop the execution of f
        console.log("cut called");  // executed
    }
    console.log("In fun");
}

console.log("Starting");
setTimeout(f, 2000);     //Runs f after a delay of 2000ms.
console.log("Again");
setTimeout(f, 2000);


cut=setInterval(f, 500);     //Runs f every 500ms.

//  Cleaner way
setInterval(function () {
    console.log("hello")
}, 1000);
