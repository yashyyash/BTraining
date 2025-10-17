console.log("person module started");
export default class Person{
    constructor(){
        console.log('person class constructor executed');
    }
    firstname:string;
    lastname:string;
    city:string;
    getPersonInfo(){
        return `person ${this.firstname} ${this.lastname} lives in ${this.city}`
    }
}
console.log("person module ended");