"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("emp module started!");
const person_1 = __importDefault(require("./person"));
class Employee extends person_1.default {
    constructor() {
        super();
        console.log("Employee constructor executed!");
    }
    empId;
}
exports.default = new Employee(); //singleton pattern
console.log("emp module ended!");
//# sourceMappingURL=employee.js.map