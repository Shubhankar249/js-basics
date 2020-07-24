let winner="Someone";

//Pass by value
function f(winner) {
    winner+=2;
    console.log(winner);
}

f(winner);
console.log(winner);

//Parameters are always passed by value.
//However for objects like arrays the object is stored in a reference variable (when changes are done in a fun they are reflected back)
//and this variable is passed by value which makes the object seems to be passed by reference.
