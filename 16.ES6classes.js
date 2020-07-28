class Person {
    constructor(name, age) {
        this.age=age;
        this.name=name
    }

    isAdult(){
        return this.age>=18;
    }
}

let p=new Person("Nike", 24);

console.log(p);
console.log(Person.prototype.isPrototypeOf(p)); // True
console.log(typeof Person);  //Function-> It is still a function like what we did earlier but now we can't call Person like a fun, it must be used as a class
// This is only a syntactical sugar kind of thing under the hood its using  prototype objects and function to implement class like behaviour



class student extends Person{   //Class inheritance
    constructor(name, age, school) {
        super(name, age);    //Calls parent class constructor
        this.school=school  // 'this' must be used after calling super because after calling constructor of the parent class only then this object is created and then create properties of student object
    }
}
let s=new student("Addidas", 50, "PAS");

console.log(s);
console.log(Person.prototype.isPrototypeOf(s)); // True

console.log(s.isAdult());
console.log(s.isAdult===p.isAdult);     //true
