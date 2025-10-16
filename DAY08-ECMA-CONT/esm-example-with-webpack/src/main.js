console.log('Main Module Started!');

import { addition, multiplication } from "./app/basic-math";

import customer1 from "./app/customer";
import customer2 from "./app/customer";

console.log(`Addition is ${addition(120, 340)}`);
console.log(`Multiplication is ${multiplication(12, 340)}`);

customer1.firstName = "Alisha";
customer1.lastName = "Verma";
customer1.city = "Delhi";
customer2.city="Bangalore";
console.log(customer1.getPersonInfo());
console.log(customer2.getPersonInfo());

console.log('Main Module Ended!');