// {
//     let companyName = "Bajaj";
// }
// // console.log(companyName);

// if (true) {

//     let num1 = 1000;

// }
// // console.log(num1);

// for (let i = 0; i < 5; i++) {
//     //some logic
// }
// // console.log(i);

// var num2 = "Ritika"
// // let num2 = 100;                    redeclaration within the same scope is not alllowed
// // let num2 = "Ritika";               Wrong

// // console.log(companyName);    Error: can not be used before its declaration . Hoisting is happening here
// let companyName = "Synechron pvt. ltd.";

// const PI = 3.14;

// // PI= 74;
// // console.log(PI);   Error :  Assignment to constant variable.

// const Offices = ["Pune", "Bangalore", "chennai"];
// Offices.push("Mumbai");
// console.log(Offices);

var Customer = {
    customerId: 22,
    contactName: "Alisha C.",
    city: "Mumbai",
};

// console.log("Customer" + Customer.contactName + "with customer id" + Customer.customerId + "lives in " + Customer.city+ "!");
console.log("Customer %s with customer id %d lives in %s!", Customer.contactName, Customer.customerId, Customer.city);