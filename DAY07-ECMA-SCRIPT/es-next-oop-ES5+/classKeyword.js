//Internally this is a function [Syntactic Sugar]
//They do not pollute the global/window scope
// class Person {
//   #_socialId;
//   firstName;
//   lastName;
//   city;
//   getPersonInfo() {
//     return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
//   }
// }

// const p1=new Person();
// p1.firstName="Manish";
// p1.lastName="Kaushik";
// p1.city="Raipur";
// console.log(p1.getPersonInfo());
// console.log(typeof(Person));




//Internally this is a function [Syntactic Sugar]
//They do not pollute the global/window scope
class Person {
  constructor(){
    console.log("Person Class Constructor Executed!");
  }
  #_socialId;
  firstName;
  lastName;
  city;
  getPersonInfo() {
    return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
  }
}

const p1=new Person();
p1.firstName="Manish";
p1.lastName="Kaushik";
p1.city="Raipur";
console.log(p1.getPersonInfo());
console.log(typeof(Person));