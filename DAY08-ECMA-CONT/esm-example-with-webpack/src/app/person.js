export default class Person {
    constructor(fname, lname, city) {
        console.log("Person Constructor Executed!");
        this.firstName = fname;
        this.lastName = lname;
        this.city = city;
    }
    firstName;
    lastName;
    city;
    getPersonInfo() {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}