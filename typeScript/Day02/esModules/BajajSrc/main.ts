console.log("Main module started!")

import mathModuleMessage, {addition, multiplication, division, subtraction, square} from './app/basic-math';

import emp1 from './app/employee';
import emp2 from './app/employee';

emp1.empId = 12;
emp1.firstName = "Aman"
emp1.lastName = "R.J."
console.log(emp1.getPersonInfo());
console.log(emp2.getPersonInfo());

console.log("Main module ended!")