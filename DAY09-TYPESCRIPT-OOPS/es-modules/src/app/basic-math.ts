import { square } from "./advance-math.js";

console.log("basic math module started");

export default function mathModuleMessage(){
    return `this is a basic math esm default message!`;
}

function addition(num1:number, num2:number):number{
    return num1+num2;
}
function subtract(num1:number, num2:number):number{
    return num1-num2;
}
function divide(num1:number, num2:number):number{
    return num1/num2;
}
function multiply(num1:number, num2:number):number{
    return num1*num2;
}


console.log("advance math module ended");
export{addition,subtract,multiply,divide};