function Person(name, age) {    // function is used to create objects
    this.name=name;
    this.age=age
}

let p=new Person("Nike", 15);    //New object is created and using this keyword it's properties are set
let p2=new Person("Nikas", 5);
console.log(p) ;
console.log(JSON.stringify(p2));     //Converts objects into strings


//Object inheritance
let a={x:"Hello", y:15, z:true};

let b=Object.create(a);  //b is inherited from object a
let c=Object.create(b);

console.log(a); // A is printed as expected
console.log(b); // Empty object
console.log(b.x);   // Hello  (b is inherited so it has properties of a)

b.t="own property";   //x is created in object b
console.log(b);     // { t: 'own property' }
console.log(a);     // t is not in a

b.x = "changed inherited property";
console.log(b);     // { t: 'own property', x: 'changed inherited property' }
console.log(a.x);   //Hello (no change on parent object)

console.log(c.x);   //x is searched in c, if not found inherited from parent object


console.log(Object.getPrototypeOf(b));   //Returns the parent of object b i.e. a
console.log(Object.getPrototypeOf(c));   // b
console.log(a.isPrototypeOf(c));    // true     Since b is inherited from a and c from b a is prototype of a

Object.setPrototypeOf(c, a);     //Sets a as parent of c
console.log(c.x);   // Hello
console.log(Object.getPrototypeOf(c));  // a

// isPrototypeOf method is used to check if a object is inherited from the given object
console.log(a.isPrototypeOf(b));
