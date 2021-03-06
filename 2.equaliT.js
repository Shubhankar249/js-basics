console.log(5=="5");    //Non strict equality   -> only value is compared (tries to typecast and then compare)
console.log(5==="5");   // F : Strict equality   -> data-type of value is also compared
console.log(true=="1");
console.log(1+"1"==11);
console.log(1+"1"==2);  // F
console.log("11"-1==1); //F
console.log([]=="");    //"" can be typecast to 0. [] can be typecast to ""
console.log([]==0);
console.log(""==0);
console.log([]+{});     //If object is converted to string it shows [object Object] , here both are typecasted to string
console.log({}+[]); //In REPL this gives 0, as {} gives nothing and then +(unary) converts [] into "" => 0.

// Since {} is used in two place - block of code and object definition. So js interpreter chooses
//If {} comes in LHS then treated as block of code and if {} come in RHS then treated as objects.

//Unary + operator
console.log(typeof +"1");   //Number ;  + typecast string to number
console.log(typeof "1");

//MDN equality search on google.




