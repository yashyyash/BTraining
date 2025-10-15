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
  constructor(fname, lname, city, aadharNo) {
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

const p1 = new Person("mainish", "kaushik", "mum", 123);
// p1.firstName="Manish";
// p1.lastName="Kaushik";
// p1.city="Raipur";
// p1.aadharNo="1234";
console.log(p1.getPersonInfo());
console.log(typeof (Person));

class Customer extends Person {
  #_ssid;
  constructor(fname, lname, city, ssid) {
    super(fname, lname, city, ssid);
    this.#_ssid = ssid;
  }
  logCustomerInfo() {
    return `Customer name is ${this.firstName} ${this.lastName} and id is ${this.#_ssid}`;
  }
}

const c1 = new Customer("Asha", "Sharma", "Delhi", 9999);
console.log(c1.getPersonInfo());
console.log(c1.logCustomerInfo());

// Multiple inheritance like `class X extends A, B {}` is not supported in JS (would be a SyntaxError).
// Two common patterns to achieve similar results: prototype mixing and functional mixins.

// 1) Prototype mixing (copies methods from multiple prototypes)
function mix(...mixins) {
  class MixBase {}
  for (const m of mixins) {
    for (const name of Object.getOwnPropertyNames(m.prototype)) {
      if (name === "constructor") continue;
      Object.defineProperty(
        MixBase.prototype,
        name,
        Object.getOwnPropertyDescriptor(m.prototype, name)
      );
    }
  }
  return MixBase;
}

class ParentA {
  greetA() { return "Hello from A"; }
}
class ParentB {
  greetB() { return "Hello from B"; }
}

// Create a base that has both ParentA and ParentB methods
class CombinedBase extends mix(ParentA, ParentB) {}

// Grandchild extends the combined base
class Grandchild extends CombinedBase {
  constructor(name) {
    super();
    this.name = name;
  }
  who() { return `Grandchild ${this.name}`; }
}

const g = new Grandchild("Alex");
console.log(g.who());     // Grandchild Alex
console.log(g.greetA());  // Hello from A
console.log(g.greetB());  // Hello from B

// 2) Functional mixins (compose classes, constructor behaviour preserved)
const withTimestamp = Base => class extends Base {
  setTimestamp() { this.timestamp = Date.now(); }
};
const withId = Base => class extends Base {
  setId(id) { this.id = id; }
};

class BaseClass {}
class MultiFeature extends withId(withTimestamp(BaseClass)) {}
const mf = new MultiFeature();
mf.setTimestamp();
mf.setId(123);
console.log(mf.timestamp, mf.id);




class Counter{
  static incrementCounter(){
    return this.count*this.count;
  }
  static count = 5;
}

new Counter();

console.log(Counter.incrementCounter());
console.log(Counter.incrementCounter());
console.log(Counter.incrementCounter());
console.log(Counter.incrementCounter());
