"use strict";
// function overloading with 3 parameters, 1 parameter, 2 parameter & 4 default
function sum(a, b, c, d) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    if (c === void 0) { c = 30; }
    if (d === void 0) { d = 40; }
    return a + b + c + d;
}
console.log(sum());
console.log(sum(5));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
//# sourceMappingURL=Assignment1.js.map