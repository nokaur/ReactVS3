//CLASSES ARE FUNCTIONS

// class Customer{}

// let c=new Customer();
// console.log(typeof Customer);

//CONSTRUCTOR

// class User {
//   //CONSTRUCTOR METHOD
//   constructor(name) {
//     this.name = name;
//     console.log(this.name + " Constructor");
//   }

//   //STATIC METHOD
//   static staticMethod() {
//     console.log("Static Method");
//   }

//PROTOTYPE METHOD, CALLED USING OBJECT
//   greetPerson() {
//     console.log("Hello " + this.name);
//   }
// }

// User.staticMethod();
// let p = new User("Novel");
// p.greetPerson();

//CLASS INHERITANCE

class Person {
  constructor(name) {
    this.name = name;
    console.log(name + " Parent constructor");
  }
  getID(){
    return 10;
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
    console.log(name + " Employee Constructor");
  }
  getID(){
    return 50;
  }
}
let e = new Employee("Novel");
console.log(e.getID());
