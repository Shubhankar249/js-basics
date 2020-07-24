function f() {
    let i=0;
    return function () {    // fun is returned
         //All variables in outer function are available to this inner function for each call , this scope is called closure scope.
        console.log(++i);
    }
}
let c=f();	// nothing gets printed just c is assigned to return value i.e. fun
c();    //i gets incremented -> 1 gets printed
c();	// 2 (i is accessible)



function counter(inVal, inc) {
    return {    //Object
        up() {  //Contains functions
            inVal+=inc;
            console.log(inVal);
        },
        down() {
            inVal-=inc;
            console.log(inVal);
        }
    }
}

let r=counter(10, 3);
r.down();	//7
r.down();	//4
r.up();		//7
