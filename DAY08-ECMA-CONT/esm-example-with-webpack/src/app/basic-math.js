console.log('Basic Math Module Started!');

import { sqaure } from './adv-math';

function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

console.log(`Sqaure of 34 is ${sqaure(34)}`);

export { addition, multiplication }

console.log('Basic Math Module Ended!');