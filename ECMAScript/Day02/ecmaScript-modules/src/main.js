console.log("Main module started!")

import mathModuleMessage, {addition, multiplication, division, subtraction, square} from './app/basic-math';

import emp1 from './app/employee';
import emp2 from './app/employee';

// console.log(`Default basic Math Export message: ${mathModuleMessage()}`)
// console.log(`Addition ${addition(1200, 1200)}`)
// console.log(`Subtraction ${subtraction(1300, 1200)}`)
// console.log(`Multiplication ${multiplication(1200, 1200)}`)
// console.log(`Division ${division(1200, 600)}`)
// console.log(`Square ${square(5)}`)

emp1.empId = 12;
emp1.firstName = "Aman"
emp1.lastName = "R.J."
console.log(emp1.getPersonInfo());
console.log(emp2.getPersonInfo());

console.log("Main module ended!")