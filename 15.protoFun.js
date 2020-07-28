function Person(name, age) {
    this.name=name;
    this.age=age
    // this.isAdult=() => {return this.age>=18}  //Using this makes different copies of this func for each object occupying extra memory
}
Person.prototype.isAdult=function () {return this.age>=18};  //All objects of type Person inherit this isAdult function stored in only one location
Person.prototype.city = "Delhi";

let a= new Person("Nike", 53);  // Inherited from Person.prototype
let b= new Person("Nola", 5);
console.log(Person.prototype.isPrototypeOf(a)); // true

console.log(a.isAdult());   // T
console.log(b);   //Person { name: 'Nola', age: 5 }
console.log(a.isAdult===b.isAdult);  //Returns false if isAdult defined inside fun. True if defined outside in prototype


// All objects inherit from prototype object
// all the methods that we use in string, array, etc like sort...  are present in prototype object
