const i=10; // let has similar scope
var j=5;

function f() {
    console.log(i); // i=10
    console.log(j); // j is undefined since var has a fun scope
    j=15;   // not an err

    if(true) {
        const i=20; // another variable named is created
        var j=22;
        console.log(i);
        console.log(j); // j=22
    }
    console.log(i); // i=10 -> const/let have a block scope
    console.log(j); // j=22 -> fun scope
}
f();
console.log(i, j);  //  10 5


