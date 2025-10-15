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
  constructor(fname,lname,city,aadharNo){
    console.log("Person Class Constructor Executed!");
    this.#_socialId = aadharNo;
    this.firstName = fname;
    this.city = city;
    this.lastName = lname;
  }
  #_socialId;
  firstName;
  lastName;
  city;
  aadharno;
  getPersonInfo() {
    return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}! social number is ${this.#_socialId}`;
  }
}

const p1=new Person("mainish","kaushik","mum",123);
// p1.firstName="Manish";
// p1.lastName="Kaushik";
// p1.city="Raipur";
// p1.aadharNo="1234";
console.log(p1.getPersonInfo());
console.log(typeof(Person));