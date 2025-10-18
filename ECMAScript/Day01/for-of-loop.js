const Offices = ["Banglore", "Chennai", "Mumbai", " Pune"];

// for(let city of Offices){
//     if(city === "Mumbai") break;
//     console.log(city);
// }

const Result = Offices[Symbol.iterator]();
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());
