"use strict";
class CrudRepository {
    _inMemoryDb = new Array();
    getAll() {
        return this._inMemoryDb;
    }
    getDetails(id) {
        return this._inMemoryDb[0];
    }
    insert(t) {
        this._inMemoryDb.push(t);
    }
    update(t) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
class JEmployee {
    empId;
    empName;
    city;
    constructor(empId, empName, city) {
        this.empId = empId;
        this.empName = empName;
        this.city = city;
    }
}
class Supplier {
    supId;
    supName;
    city;
    constructor(supId, supName, city) {
        this.supId = supId;
        this.supName = supName;
        this.city = city;
    }
}
const e1 = new JEmployee(10, "Aman", "Mumbai");
const e2 = new JEmployee(100, "karan", "Pune");
const ss1 = new Supplier(200, "Rohan", "Bangaluru");
const ss2 = new Supplier(300, "Raj", "Hyderabad");
const employeeRepository = new CrudRepository();
employeeRepository.insert(e1);
employeeRepository.insert(e2);
console.log(employeeRepository.getAll());
console.log(employeeRepository.getDetails(e1.empId));
const supplierRepository = new CrudRepository();
supplierRepository.insert(ss1);
supplierRepository.insert(ss2);
console.log(supplierRepository.getAll());
console.log(supplierRepository.getDetails(ss1.supId));
//# sourceMappingURL=generics.js.map