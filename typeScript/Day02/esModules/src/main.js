"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Main module started!");
const employee_1 = __importDefault(require("./app/employee"));
const employee_2 = __importDefault(require("./app/employee"));
employee_1.default.empId = 12;
employee_1.default.firstName = "Aman";
employee_1.default.lastName = "R.J.";
console.log(employee_1.default.getPersonInfo());
console.log(employee_2.default.getPersonInfo());
console.log("Main module ended!");
//# sourceMappingURL=main.js.map