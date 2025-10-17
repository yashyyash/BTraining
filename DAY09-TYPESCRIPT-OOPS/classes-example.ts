// class Person {
//     Firstname: string;
//     Lastname: string;
//     private PersonID: number;
//     Personlog(): string {
//         return `Name: ${this.Firstname} ${this.Lastname}`;
//     }
// }

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

abstract class Person {
    constructor(public firstName?: string, public lastName?: string, public city?: string, protected socialId?: number) {
        console.log('Person Constructor Executed!');
    }
    private _address: string;
    get address(): string {
        console.log('Address - GET Property Executed!');
        return this._address;
    }
    set address(value: string) {
        console.log('Address - SET Property Executed!');
        this._address = value;
    }

    private _state: string;
    public get state(): string {
        return this._state;
    }
    public set state(v: string) {
        this._state = v;
    }

    getPersonInfo(): string {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
    abstract changeAddress(oldAddress: string, newAddress: string): boolean;
}

class Customer extends Person {
    constructor(firstName?: string, lastName?: string, city?: string, socialId?: number) {
        super(firstName, lastName, city, socialId);
        console.log('Customer Constructor Executed!');
    }
    customerId: number;
    changeAddress(oldAddress: string, newAddress: string): boolean {
        console.log(`Customer ${this.firstName} ${this.lastName} has changed his/her address from ${oldAddress} to ${newAddress}!`);
        return true;
    }
}

//const person: Person = new Person("Pravinkumar", "R. D.", "Pune", 2392839233);
const customer: Customer = new Customer("Manish", "Kaushik", "Raipur", 2392739333);
customer.address = "Suncity, A8/404";
// customer.firstName = "Alisha";
// customer.lastName = "Patil";
// customer.city = "Delhi";
console.log(customer.getPersonInfo());
console.log(customer.changeAddress(customer.address, "Star City,C5/101"));