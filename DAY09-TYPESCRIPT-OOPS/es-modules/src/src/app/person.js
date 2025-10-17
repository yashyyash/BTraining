"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("person module started");
class Person {
    constructor() {
        console.log('person class constructor executed');
    }
    firstname;
    lastname;
    city;
    getPersonInfo() {
        return `person ${this.firstname} ${this.lastname} lives in ${this.city}`;
    }
}
exports.default = Person;
console.log("person module ended");
//# sourceMappingURL=person.js.map