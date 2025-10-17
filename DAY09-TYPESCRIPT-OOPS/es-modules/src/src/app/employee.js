"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("emp module started");
const person_js_1 = __importDefault(require("./person.js"));
class Emplpoyee extends person_js_1.default {
    constructor() {
        super();
        console.log(`employee Class Constructor executed`);
    }
    employeeid;
}
exports.default = new Emplpoyee();
console.log("emp module ended");
//# sourceMappingURL=employee.js.map