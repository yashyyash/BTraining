console.log("emp module started");

import BajajPerson from "./person.js";
class Emplpoyee extends BajajPerson{
    constructor(){
        super();
        console.log(`employee Class Constructor executed`)
    }
    employeeid:number;
}

export default new Emplpoyee();
console.log("emp module ended");