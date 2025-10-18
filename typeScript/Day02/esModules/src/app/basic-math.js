"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = void 0;
exports.default = mathModuleMessage;
exports.addition = addition;
exports.multiplication = multiplication;
exports.division = division;
exports.subtraction = subtraction;
console.log("basic module started!");
const adv_math_1 = require("./adv-math");
Object.defineProperty(exports, "square", { enumerable: true, get: function () { return adv_math_1.square; } });
function mathModuleMessage() {
    return " this is a basic math ESM defult message!";
}
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
console.log("basic module ended!");
//# sourceMappingURL=basic-math.js.map