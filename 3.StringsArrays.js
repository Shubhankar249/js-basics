let str="dsklcdskncl";
//Immutable
console.log(str.indexOf('s',2));
console.log(str.lastIndexOf('k', 6));
console.log(str.substr(2,5));
console.log(str.substring(2,5));
console.log(str.slice(-5,-1));
console.log(str.split("l"));

let ar=[1,2,5,"hello", [2,5]];
console.log(ar[4]);
console.log(ar.join('-'));

ar.splice(3,1);
console.log(ar);

ar[7]="hii";
console.log(ar,"->", ar.length);
ar[5]=10;
console.log(ar);

let p=3;
let str2=`this is ${p} one's self.`;    //Note the use of `
console.log(str2);

let longStr='this is \
    a very long string \n \
    howsoever.';
console.log(longStr);

ar.pop();
ar.push(220, "kill ");
console.log(ar);

ar.shift();     //First element removed
ar.unshift(25, 35);     //Elements inserted at start
console.log(ar);

ar.splice(2,2, "my", "name", "is", "asc");
console.log(ar);

ar.concat(112);
console.log(ar);    //Doesn't mutate
