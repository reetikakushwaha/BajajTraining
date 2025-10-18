console.log("person module started!")

export default class person{
    constructor(){
        console.log("Person class contructor executed!");
    }
     firstName;
     lastName;
     city;
     getPersonInfo(){
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
     }
}

console.log("person module ended!")