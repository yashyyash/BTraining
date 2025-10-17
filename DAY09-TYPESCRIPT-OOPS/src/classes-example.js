"use strict";
// class Person {
//     Firstname: string;
//     Lastname: string;
//     private PersonID: number;
//     Personlog(): string {
//         return `Name: ${this.Firstname} ${this.Lastname}`;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// usage
// const person: Person = new Person();
// personalbar.Firstname
// 
// console.log(person.id);
// class Person {
//     Firstname: string|undefined;
//     Lastname: string|undefined;
//     protected PersonID: string|undefined;
//     constructor(Firstname?: string|undefined, Lastname?: string|undefined, PersonID?:string|undefined) {
//         this.Firstname = Firstname;
//         this.Lastname = Lastname;
//         this.PersonID = PersonID;
//         console.log(`class constructor executed`);
//     }
//     Personlog(): string {
//         return `ID: ${this.PersonID} Name: ${this.Firstname} ${this.Lastname}`;
//     }
// }
// const person:Person = new Person("yash","mutatkar","GNOP3klmon");
// person.Personlog()
// class Person {
//     constructor(public fname?: string ,public lname?: string,public city?: string,protected socialId?: number){
//     }
//     private _address: string;
//     get address(): string{
//         console.log("Address GET");
//         return this._address;
//     }
//     set address(value: string){
//         console.log("address SET");
//         this._address = value;
//     }
//     getPersonInfo(): string{
//         return `Person ${this.fname} ${this.lname} with social id ${this.socialId} lives in ${this.city}!`;
//     }
// }
//  const person: Person = new Person("Aman", "R.J.", "Mumbai", 12345678);
//  person.address = "Banglore";
//  console.log(person.address);
// abstract class Person{
//     city: string;
//     constructor(value: string){
//         this.city = value;
//     }
//     getpersonInfo(): string{
//         return `Lives in city ${this.city}`;
//     }
//     abstract chageAdress(oldAddress: string, newAddress: string): boolean;
// }
// class Customer extends Person{
//     constructor(city: string){
//         super(city);
//     }
//     chageAdress(oldAddress: string, newAddress: string): boolean {
//         console.log(`Address changed from ${oldAddress} to ${newAddress}`);
//         return true;
//     }
// }
//  to study important code and all the concepts
var Person = /** @class */ (function () {
    function Person(firstName, lastName, city, socialId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.socialId = socialId;
        console.log('Person Constructor Executed!');
    }
    Object.defineProperty(Person.prototype, "address", {
        get: function () {
            console.log('Address - GET Property Executed!');
            return this._address;
        },
        set: function (value) {
            console.log('Address - SET Property Executed!');
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getPersonInfo = function () {
        return "Person ".concat(this.firstName, " ").concat(this.lastName, " lives in city ").concat(this.city, "!");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(firstName, lastName, city, socialId) {
        var _this = _super.call(this, firstName, lastName, city, socialId) || this;
        console.log('Customer Constructor Executed!');
        return _this;
    }
    Customer.prototype.changeAddress = function (oldAddress, newAddress) {
        console.log("Customer ".concat(this.firstName, " ").concat(this.lastName, " has changed his/her address from ").concat(oldAddress, " to ").concat(newAddress, "!"));
        return true;
    };
    return Customer;
}(Person));
//const person: Person = new Person("Pravinkumar", "R. D.", "Pune", 2392839233);
var customer = new Customer("Manish", "Kaushik", "Raipur", 2392739333);
customer.address = "Suncity, A8/404";
// customer.firstName = "Alisha";
// customer.lastName = "Patil";
// customer.city = "Delhi";
console.log(customer.getPersonInfo());
console.log(customer.changeAddress(customer.address, "Star City,C5/101"));
//# sourceMappingURL=classes-example.js.map