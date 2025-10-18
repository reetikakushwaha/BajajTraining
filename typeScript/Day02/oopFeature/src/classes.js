"use strict";
// class Person {
//     private _socialId: number;
//     fname: string;
//     lname: string;
//     city: string;
//     getPersonInfo(): string{
//         return `Person ${this.fname} ${this.lname} lives in ${this.city}!`;
//     }
// }
// const person: Person = new Person();
// person.fname = "Aman";
// person.lname = "R.J.";
// person.city = "Mumbai";
// console.log(person.getPersonInfo());
// class Person {
//     constructor(fname?: string , lname?: string, city?: string, socialId?: number){
//         this.fname = fname;
//         this.lname = lname;
//         this.city = city;
//         this._socialId = socialId;
//     }
//     private _socialId: number | undefined;
//     fname: string | undefined;
//     lname: string | undefined;
//     city: string | undefined;
//     getPersonInfo(): string{
//         return `Person ${this.fname} ${this.lname} with social id ${this._socialId} lives in ${this.city}!`;
//     }
// }
//  const person: Person = new Person("Aman", "R.J.", "Mumbai", 12345678);
//  console.log(person.getPersonInfo());
// class Person {
//     constructor(public fname?: string ,public lname?: string,public city?: string,protected socialId?: number){
//     }
//     getPersonInfo(): string{
//         return `Person ${this.fname} ${this.lname} with social id ${this.socialId} lives in ${this.city}!`;
//     }
// }
//  const person: Person = new Person("Aman", "R.J.", "Mumbai", 12345678);
//  console.log(person.getPersonInfo());
// class Person {
//     constructor(public fname?: string ,public lname?: string,public city?: string,protected socialId?: number){
//     }
//     private _address: string;
//     get address(): string{
//         console.log("Address GET");
//         return this._address;
//     }
//     set address(value: string){
//         console.log("address SET");
//         this._address = value;
//     }
//     getPersonInfo(): string{
//         return `Person ${this.fname} ${this.lname} with social id ${this.socialId} lives in ${this.city}!`;
//     }
// }
//  const person: Person = new Person("Aman", "R.J.", "Mumbai", 12345678);
//  person.address = "Banglore";
//  console.log(person.address);
// abstract class Person {
//     constructor(public fname?: string, public lname?: string, public city?: string, protected socialId?: number) {
//         console.log("person constructor executed!")
//     }
//     private _address: string;
//     get address(): string {
//         console.log("Address GET");
//         return this._address;
//     }
//     set address(value: string) {
//         console.log("address SET");
//         this._address = value;
//     }
//     getPersonInfo(): string {
//         return `Person ${this.fname} ${this.lname} with social id ${this.socialId} lives in ${this.city}!`;
//     }
//     abstract changeAddress(oldAddress: string, newAddress: string): boolean;
// }
// class Customer extends Person {
//     constructor( fname?: string,
//         lname?: string,
//         city?: string,
//         socialId?: number) {
//         super(fname, lname, city, socialId);
//             console.log("Customer constructor executed!")
//     }
//     changeAddress(oldAddress: string, newAddress: string): boolean {
//         console.log(`Address changed from ${oldAddress} to ${newAddress}`);
//         return true;
//     }
// }
// const customer: Customer = new Customer("Aman", "Sharma", "Mumbai", 123456);
// console.log(customer.getPersonInfo());
// customer.address = "Bandra, Mumbai";
// customer.changeAddress("Bandra, Mumbai", "Andheri, Mumbai");
// abstract class Person {
//     constructor(public firstName?: string, public lastName?: string, public city?: string, protected socialId?: number) {
//         console.log('Person Constructor Executed!');
//     }
//     private _address: string;
//     get address(): string {
//         console.log('Address - GET Property Executed!');
//         return this._address;
//     }
//     set address(value: string) {
//         console.log('Address - SET Property Executed!');
//         this._address = value;
//     }
//     private _state: string;
//     public get state(): string {
//         return this._state;
//     }
//     public set state(v: string) {
//         this._state = v;
//     }
//     getPersonInfo(): string {
//         return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
//     }
//     abstract changeAddress(oldAddress: string, newAddress: string): boolean;
// }
// class Customer extends Person {
//     constructor(firstName?: string, lastName?: string, city?: string, socialId?: number) {
//         super(firstName, lastName, city, socialId);
//         console.log('Customer Constructor Executed!');
//     }
//     customerId: number;
//     changeAddress(oldAddress: string, newAddress: string): boolean {
//         console.log(`Customer ${this.firstName} ${this.lastName} has changed his/her address from ${oldAddress} to ${newAddress}!`);
//         return true;
//     }
// }
// const customer: Customer = new Customer("Manish", "Kaushik", "Raipur", 2392739333);
// customer.address = "Suncity, A8/404";
// console.log(customer.getPersonInfo());
// console.log(customer.changeAddress(customer.address, "Star City,C5/101"));
class Counter {
    static Count = 1;
    constructor() {
        console.log(`Counter class instance number is ${Counter.Count++}`);
    }
    static increamentCounter() {
        return Counter.Count++;
    }
}
new Counter();
new Counter();
new Counter();
console.log(Counter.increamentCounter());
console.log(Counter.increamentCounter());
console.log(Counter.increamentCounter());
//# sourceMappingURL=classes.js.map