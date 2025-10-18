interface CommonCrud<T>{
    getAll():T[];
    getDetails(id:number):T;
    insert(t:T):void;
    update(t:T):void;
    delete(id:number):void;
}

class CrudRepository<T> implements CommonCrud<T>{
    private _inMemoryDb: Array<T> = new Array<T>();

    getAll(): T[] {
        return this._inMemoryDb
    }
    getDetails(id: number): T {
        return this._inMemoryDb[0];
    }
    insert(t: T): void {
        this._inMemoryDb.push(t);
    }
    update(t: T): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}

class JEmployee{
    constructor(public empId: number, public empName: string, public city: string){

    }
}

class Supplier{
    constructor(public supId: number, public supName: string, public city: string){
        
    }
}

const e1: JEmployee = new JEmployee(10, "Aman", "Mumbai");
const e2: JEmployee = new JEmployee(100, "karan", "Pune");

const ss1: Supplier = new Supplier(200, "Rohan", "Bangaluru");
const ss2: Supplier = new Supplier(300, "Raj", "Hyderabad");

const employeeRepository: CommonCrud<JEmployee> = new CrudRepository<JEmployee>();
employeeRepository.insert(e1);
employeeRepository.insert(e2);
console.log(employeeRepository.getAll());
console.log(employeeRepository.getDetails(e1.empId));

const supplierRepository: CommonCrud<Supplier> = new CrudRepository<Supplier>();
supplierRepository.insert(ss1);
supplierRepository.insert(ss2);
console.log(supplierRepository.getAll());
console.log(supplierRepository.getDetails(ss1.supId));