//Immediately Invoked Function Expression
// When the function is need to be called only once it can be make an IIFE

(function (x, out) {    // since fun is called immediately it doesn't need a name
    //x=15;
    let a=20;
    out("print something "+(x-a));  // console.log is shortened (uglifyJs like scripts uses IIFE to reduce size of files)

})(15, console.log);      // the parameters are passed in (could also be empty)

//console.log(a);   Gives error because a is not defined.


