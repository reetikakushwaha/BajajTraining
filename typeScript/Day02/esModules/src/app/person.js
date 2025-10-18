"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("person module started!");
class person {
    constructor() {
        console.log("Person class contructor executed!");
    }
    firstName;
    lastName;
    city;
    getPersonInfo() {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
exports.default = person;
console.log("person module ended!");
//# sourceMappingURL=person.js.map