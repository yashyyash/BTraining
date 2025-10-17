"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const advance_math_js_1 = require("./app/advance-math.js");
const basic_math_js_1 = __importStar(require("./app/basic-math.js"));
const employee_js_1 = __importDefault(require("./app/employee.js"));
const employee_js_2 = __importDefault(require("./app/employee.js"));
console.log("main module started");
console.log(`MODULE CALLED ${(0, basic_math_js_1.default)()}`);
console.log(`Addition ${(0, basic_math_js_1.addition)(200, 200)}`);
console.log(`subtract ${(0, basic_math_js_1.subtract)(200, 200)}`);
console.log(`divide ${(0, basic_math_js_1.divide)(200, 200)}`);
console.log(`multiply ${(0, basic_math_js_1.multiply)(200, 200)}`);
console.log(`square ${(0, advance_math_js_1.square)(200)}`);
console.log(`square root ${(0, advance_math_js_1.squareRoot)(9)}`);
employee_js_1.default.employeeid = 991;
employee_js_1.default.firstname = "yash";
employee_js_1.default.lastname = "mutatkar";
employee_js_1.default.city = "pine";
console.log(employee_js_1.default.getPersonInfo());
console.log(employee_js_2.default.getPersonInfo());
console.log("main module ended");
//# sourceMappingURL=main.js.map