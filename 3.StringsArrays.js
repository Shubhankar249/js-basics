//Strings -> Immutable
// Methods are there for operations but they produce new strings

let str="dsklcdskncl";
str[1]="f"; //doesn't produce err but has no affect -> nothing changes
console.log(str[1]);    //s

console.log(str.indexOf('s'));    //1
console.log(str.indexOf('s', 2));    //6

console.log(str.lastIndexOf('s'));  //6
console.log(str.lastIndexOf('s', 4));  //1  (checks if s[4]===s -> s[3]===s ...)

console.log(str.substr(2)); // klcdskncl
console.log(str.substr(2,5)); //klcds
console.log(str.substring(2, 5));    //klc

console.log(str.slice(2, 5));   // klc
console.log(str.slice(-5,-1));  //sknc  (-ve indices not allowed in substring)

console.log(str.split("l"));    //returns arr of strings

console.log(str + '\n==========================');   // Original string

let p=3;
let str2=`this is ${p} one's self.`;    //Note the use of `
console.log(str2);

let longStr='this is \
a very long string \n\
howsoever.\n\
===================================================================================\n';
console.log(longStr);


// Arrays
let ar=[1,2,5,"hello", [2,5]];
console.log(typeof ar); // object
console.log(ar[4]); // array [2,5]
console.log(ar.join('-'));  // string

ar.splice(3,1); // start deleting from 3rd index
console.log(ar);    // hello is deleted

ar[7]="hii";    // leaves empty blocks
console.log(ar,"->", ar.length);

ar.pop();
ar.pop();   // empty space can be popped also
ar.push(220, "kill");   // insert given elements at last
console.log(ar);

ar.shift();     //First element removed
ar.unshift(25, 35);     //Elements inserted at start
console.log(ar);

ar.splice(2,2, "my", "name", "is"); //deletes then insert at their place
console.log(ar);

let v= ar.concat([5,3,"world"]);
console.log(ar);    //Doesn't mutate
console.log(v);
