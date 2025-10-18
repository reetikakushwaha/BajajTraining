//Internally this is a function [Syntactic Sugar]
//They do not pollute the global/window scope
// class Person {
//     constructor(fname, lname, city, aadharNo){
//         console.log("Person class Constructor exxecuted!");
//         this.firstName = fname;
//         this.lastName=lname;
//         this.city=city;
//         this.#_socialId = aadharNo;
//     }
//   #_socialId;
//   firstName;
//   lastName;
//   city;
//   getPersonInfo() {
//     return `Person ${this.firstName} ${this.lastName} lives in city ${this.city} aadhar is ${this.#_socialId}!`;
//   }
// }

// class Customer extends Person{
//     constructor(fname, lname, city, aadharNo){
//         super(fname, lname, city, aadharNo);
//         console.log("Customer class constructor executed!")
//     }
// }

// const p1=new Person("Aman","Jain","Mumbai", 1234567876);
// const c1 = new Customer("Karan", "R.J.", "Pune", 12345609876);
// p1.firstName="Manish";
// p1.lastName="Kaushik";
// p1.city="Raipur";
// console.log(p1.getPersonInfo());
// console.log(c1.getPersonInfo());
// console.log(typeof(Person));


// multiple inheritance  - not possible

// class Parent{

// }
// class Child{

// }
// class GrandChild extends Parent, Child{

// }

class Counter{
    static count= 1;
    static increamentCounter(){
        return this.count++;
    }
}

c1 = new Counter();
c1 = new Counter();
c1 = new Counter();
console.log(Counter.increamentCounter());
console.log(Counter.increamentCounter());
console.log(Counter.increamentCounter());
