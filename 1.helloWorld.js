// Printing on console
console.log("hello-world");

// Declaring variables (Number, string, bool)
// For jS variable has no type but only data has a type -> variable can contain any type of data
let result=5;
const t=12.5;   // t+=5 produces error as t is const
result="";  // Not a type-safe language (first it contained number then string)

// typeof
console.log(typeof result, typeof t);     // string number -> data has type


// Loops
for (let i=0; i<4; i++) {
    console.log(i*i);   // In separate lines
    result+=i*i+" ";
}
console.log(result);    // On single line

let ar=[10,20,30,40,50];
for (let val of ar) console.log(val);   // for-of loop like for-each in c++
for (let ind in ar) console.log(ind);   // for-in loop -> gives index


// Max value of number
console.log(Number.MAX_SAFE_INTEGER);   //9007199254740991


//Objects
let obj1={a:15, 1:"hello", 2.5: 50}; // Keys are converted to strings
console.log(obj1["2.5"]);    // To access value of numbered keys
console.log(obj1.a);     // Normal . operator usage


let obj={a:15, myName:"Shubhankar", c:2.2, d:{x:15, y:20}}; // Object can contain objects

obj.e="added";  // Adding key-value pair directly to obj

delete obj.c;   // deleting random object
console.log(obj);

// const obj can also be modified
const obj2 = {a: 2, b:15};
obj2.a = 3;
console.log(obj2);  // { a: 3, b: 15 }


// functions
function inc (cuteness) {
    return ++cuteness;
}

let cuteness=20;
console.log(inc(cuteness)); // 21
console.log(cuteness);  // 20   -> pass by value


// Q. Second largest element
let a=[1,5,3,4,8, 8, 7];    //Array
a.sort((a, b) => {return b-a}); // Sorting in desc using comparator fun
let largest=a[0];
while (largest ===a[0])
    a.shift();  // Like pop operation but from start
console.log(a[0]);

// # sort fun by default treats elements like strings so to sort as numbers
//   either in asc/desc use comparator fun

console.log(true + true); // 2
