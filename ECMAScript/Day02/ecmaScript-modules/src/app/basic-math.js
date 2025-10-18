console.log("basic module started!")

import {square} from './adv-math'

export default function mathModuleMessage(){
    return " this is a basic math ESM defult message!"
}

 function addition(num1, num2){
    return num1 + num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}
 function multiplication(num1, num2){
    return num1 * num2;
}
 function division(num1, num2){
    return num1 / num2;
}

export {addition, multiplication, division, subtraction, square};

console.log("basic module ended!")