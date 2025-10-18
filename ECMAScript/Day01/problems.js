// var Offices = ["Banglore", "Chennai", "Mumbai", " Pune"];

// for(var i = 0; i < Offices.length; i++){
//     if(Offices[i] == "Mumbai")
//         break;
//      console.log(Offices[i]);
// }

// Offices.forEach(i => {
//     console.log(i);
// }


// var Employee = {
//   employeeId: 2398,
//   employeeName: "Alisha C.",
//   city: "Mumbai",
//   logEmployeeInfo:function(){
//     setTimeout(function(){
//       console.log('Employee ' + this.employeeName + ' lives in city ' + this.city + "!");
//     },2000);
//   }
// };
// Employee.logEmployeeInfo();

// var Employee = {
//   employeeId: 2398,
//   employeeName: "Alisha C.",
//   city: "Mumbai",
//   logEmployeeInfo: function() {
//     var self = this;
//     setTimeout(function() {
//       console.log('Employee ' + self.employeeName + ' lives in city ' + self.city + "!");
//     }, 2000);
//   }
// };

// Employee.logEmployeeInfo();

//Arrow functions does not have implicit binding with this keyword. They rather inherit the context from the parent function

// const Employee = {
//   employeeId: 2398,
//   employeeName: "Alisha C.",
//   city: "Mumbai",
//   logEmployeeInfo: function () {
//     console.log(this);
//     setTimeout(()=> {
//       console.log(this);
//       console.log(
//         "Employee " + this.employeeName + " lives in city " + this.city + "!"
//       );
//     }, 2000);
//   },
// };
// Employee.logEmployeeInfo();


// var mobiles = ["Apple", "Motorola", "Samsung", "Nokia"]

var mobiles = ["Apple", "Motorola", "Samsung", "Nokia"];
var [mobile1, mobile2, mobile3, mobile4] = mobiles;

console.log(mobile1); 
console.log(mobile2); 
console.log(mobile3); 
console.log(mobile4); 
