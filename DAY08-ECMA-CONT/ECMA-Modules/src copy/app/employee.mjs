console.log("emp module started");

import BajajPerson from "./person.mjs";
class Emplpoyee extends BajajPerson{
    constructor(){
        super();
        console.log(`employee Class Constructor executed`)
    }
    employeeid;
}

export default new Emplpoyee();
console.log("emp module ended");