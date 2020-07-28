// program to reverse a string
let s=true;
try {
    let a=s.split('');
    a.reverse();
    s=a.join('');
    console.log(s)
}
catch (e) { // How program would respond to errors, prevents application from crashing
    console.error(e.message);
}


// Creating custom errors
function reverse(s) {
    if (typeof s==="number")
        throw new Error("Numbers can't be reversed");   // create new error object and throws the error
    else if (typeof s==="boolean")
        throw new Error("Boolean can't be reversed.");
    let a=s.split('');
    a.reverse();
    s=a.join('');
    console.log(s)
}

try {
    reverse(s)
}
catch (e) {
    console.log(e.message)
}
finally {   // Do irrespective of try executes or catch does
    console.log(s);
}
