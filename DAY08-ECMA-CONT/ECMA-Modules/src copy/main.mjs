import { square, squareRoot } from "./app/advance-math.mjs";
import mathModuleMessage,{ addition,divide,multiply,subtract } from "./app/basic-math.mjs";

import employee1 from "./app/employee.mjs";
import employee2 from "./app/employee.mjs";
import employee3 from "./app/employee.mjs";

console.log("main module started");
console.log(`MODULE CALLED ${mathModuleMessage()}`);
console.log(`Addition ${addition(200,200)}`);
console.log(`subtract ${subtract(200,200)}`);
console.log(`divide ${divide(200,200)}`);
console.log(`multiply ${multiply(200,200)}`);
console.log(`square ${square(200)}`);
console.log(`square root ${squareRoot(9)}`);

employee1.employeeid = 991;
employee1.firstname = "yash";
employee1.lastname = "mutatkar";
employee1.city = "pine";
console.log(employee1.getPersonInfo());
employee1.employeeid = 991;
employee1.firstname = "reetika";
employee1.lastname = "kushwaha";
employee1.city = "pune";
console.log(employee2.getPersonInfo());
employee1.employeeid = 991;
employee1.firstname = "yash";
employee1.lastname = "mutatkar";
employee1.city = "pine";
employee1.employeeid = 991;
employee1.firstname = "reetika";
employee1.lastname = "kushwaha";
employee1.city = "pune";
console.log(employee1.getPersonInfo());
console.log(employee2.getPersonInfo());
console.log(employee3.getPersonInfo());
console.log("main module ended");