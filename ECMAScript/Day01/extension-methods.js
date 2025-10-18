// let mySpecialNumber = "NaN";
// console.log(isNaN(mySpecialNumber));

// console.log(Number.isNaN(mySpecialNumber));
// console.log('');
// console.log(Number.isInteger(100));
// console.log(Number.isInteger(-100));
// console.log(Number.isInteger(100.88));
// console.log(isFinite(10123456780));

// let hrMessage = "Welcome to Bajaj Finserv, Pune";
// console.log(hrMessage.startsWith("Wel"));


// let face = "\u{1f600}";
// console.log(`This is my ${face.repeat(5)} face!`);

// Array Extension 

const myArray = new Array(123);
console.log(myArray.length);
const anotherArray = Array.of(123);
console.log(anotherArray.length);

const Employees = [
    {
        employeeId: 2370,
        employeeName: "Pravinkumar R. D.",
        address: "Suncity, A8/404",
        city: "Pune",
        zipcode: 411051,
        phone: "+91 23892893",
        email: "pravin.r.d@synechron.com",
        skillSets: "Microsoft/JavaScript",
        country: "India",
        joiningDate: new Date(),
        avatar: "images/noimage.png"
    },
    {
        employeeId: 2372,
        employeeName: "Manish Kaushik",
        address: "Mooncity, Z8/404",
        city: "Raipur",
        zipcode: 459899,
        phone: "+91 9039039090",
        email: "manish.kaushik@synechron.com",
        skillSets: "DBA",
        country: "India",
        joiningDate: new Date(),
        avatar: "images/noimage.png"
    },
    {
        employeeId: 2374,
        employeeName: "Alisha C.",
        address: "Mooncity, B8/404",
        city: "Mumbai",
        zipcode: 510512,
        phone: "+91 30003000",
        email: "alisha.c@synechron.com",
        skillSets: "Java",
        country: "India",
        joiningDate: new Date(),
        avatar: "images/noimage.png"
    }
];

// const employee1 = Employees.find((employee) => employee.zipcode == 411051);
// console.log(employee1);
// const emp = Employees.find((employee) => employee.city.toLowerCase().includes("u"));
// console.log(emp);


// const Amounts = [123,1234,234,34];
// const Discountedamount = Array.from(Amounts, function(amt) {
//     return amt = amt -(amt *this.discount)/100;
// },{
//     discount: 15,
// });

// console.log(Amounts);
// console.log(Discountedamount);

// const Values = [10,20,30,40,50];
// console.log(Values.fill(11,2,4));
// console.log(Values.fill(12,-5,-2));

// Object Extension



