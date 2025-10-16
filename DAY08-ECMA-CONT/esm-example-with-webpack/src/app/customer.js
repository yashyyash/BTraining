import SynePerson from "./person";

class Customer extends SynePerson {
    constructor() {
        console.log("Customer Constructor Executed!");
        super();
    }
    customerId;
}

//Singleton Pattern
export default new Customer();