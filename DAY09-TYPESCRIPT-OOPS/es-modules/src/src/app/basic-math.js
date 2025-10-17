"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mathModuleMessage;
exports.addition = addition;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
console.log("basic math module started");
function mathModuleMessage() {
    return `this is a basic math esm default message!`;
}
function addition(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
console.log("advance math module ended");
//# sourceMappingURL=basic-math.js.map