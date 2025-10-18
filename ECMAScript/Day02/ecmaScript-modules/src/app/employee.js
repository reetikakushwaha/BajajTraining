console.log("emp module started!")
import Person from './person';

class Employee extends Person{
    constructor(){
        super();
        console.log("Employee constructor executed!");
    }
    empId;
}
export default new Employee();  //singleton pattern
console.log("emp module ended!")